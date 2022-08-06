import { Button, Dialog, DialogActions, Grid, Snackbar, TextField } from '@mui/material'
import type { NextPage } from 'next'
import { useState } from 'react'
import Lista from '../ui/components/Lista/Lista'
import Titulo from '../ui/components/Titulo/Titulo'
import { useIndex } from '../data/hooks/pages/useIndex'

const Home: NextPage = () => {
  const { 
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
  } = useIndex();

  //teste de useState
  let [meuNumero, atualizarNumero] = useState(0);

  return (
    <div>
      <button onClick={() => atualizarNumero(++meuNumero)}>CLIQUES - {meuNumero}</button>

      <Titulo 
      titulo="" 
      subtitulo={
        <span>
          Com um pequeno valor mensal, vc <br />
          pode <strong>adotar um pet virtualmente</strong>
        </span>
      }
      />
      
      <Lista 
        pets={listaPets}
        onSelect={ (pet) => setPetSelecionado(pet) }
      />

      <Dialog 
        open={ petSelecionado !== null }
        fullWidth
        PaperProps={ { sx: {padding:'40px'} } }
        onClose={ () => setPetSelecionado(null) }
      >
        <Grid container spacing={2}>

        <Grid item xs={12}>
          Adotar {petSelecionado?.nome}
        </Grid>

          <Grid item xs={12}>
            <TextField
              label={'E-mail'}
              type={'email'}
              fullWidth
              value={email}
              onChange = { (e) => setEmail(e.target.value) }
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label={'Quantia por mês'}
              type={'number'}
              fullWidth
              value={valor}
              onChange = { (e) => setValor(e.target.value) }
            />
          </Grid>

        </Grid>

        <DialogActions>
          <Button
            color={'secondary'}
            onClick={ () => setPetSelecionado(null) }
            >
            Cancelar
          </Button>
          <Button
            variant={'contained'}
            onClick={ () => adotar() }
            >
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar 
        open={ mensagem?.length > 0 }
        message={ mensagem }
        autoHideDuration={5000}
        onClose={() => setMensagem('')}
      />

    </div>
  )
}

export default Home
