import { AxiosError } from "axios";
import { ExecException } from "child_process";
import { useEffect, useState } from "react";
import { Pet } from "../../@types/Pet";
import { ApiService } from "../../services/ApiService";

export function useIndex() {
    const [listaPets, setListaPets] = useState<Pet[]>(
        []
    ),
    [petSelecionado, setPetSelecionado] = useState<Pet | null>(null),
    [email, setEmail] = useState(''),
    [valor, setValor] = useState(''),
    [mensagem, setMensagem] = useState('');   

    useEffect( () => {
        ApiService.get('/pets')
        .then( (resposta) => {
            if (resposta?.data !== null) {
                setListaPets(resposta.data);
            } else {
                setMensagem("Nenhum Pet Cadastrado");
            }
        })
        .catch((e : ExecException) => {
            setMensagem(e.message);
        })
    }, [])

    useEffect( () => {
        if(petSelecionado === null) {
            limparFormulario();
        }
    }, [petSelecionado])

    function adotar() {
        if(petSelecionado !== null) {
            if(validarDadosAdocao()) {
                ApiService.post('/adocoes', {
                    pet_id: petSelecionado.id,
                    email: email,
                    valor: valor
                })
                .then( () => {
                    //sucesso na adoção
                    setPetSelecionado(null);
                    setMensagem('Pet adotado com sucesso!');
                    //limparFormulario();
                })
                .catch((error: AxiosError) => {
                    var mensagemErro = error.response?.data.message;
                    setMensagem(mensagemErro);                
                })
            } else {
                setMensagem("Preencha todos os campos corretamente!")
            }
        }
    }

    function validarDadosAdocao() {
        return email.length > 0 && valor.length > 0;
    }

    function limparFormulario() {
        setEmail("");
        setValor("");
    }

    return {
        //listaPets: listaPets
        //OU:
        listaPets,
        petSelecionado,
        setPetSelecionado,
        email,
        setEmail,
        valor,
        setValor,
        mensagem, 
        setMensagem,
        adotar
    };
}