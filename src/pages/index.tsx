import type { NextPage } from 'next'
import Lista from '../ui/components/Lista/Lista'
import Titulo from '../ui/components/Titulo/Titulo'

const Home: NextPage = () => {
  return (
    <div>
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
        pets={[
          {
            id: 1,
            nome: 'Bidu',
            historia: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque placeat accusantium sint explicabo tenetur, et totam alias labore officia obcaecati dolorum aliquid quos voluptatibus neque voluptas assumenda quas nobis recusandae.',
            foto: 'https://www.dicasdemulher.com.br/wp-content/uploads/2013/06/como-se-organizar-para-ter-um-cachorrinho.jpg'
          },
          {
            id: 2,
            nome: 'Bidu2',
            historia: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque placeat accusantium sint explicabo tenetur, et totam alias labore officia obcaecati dolorum aliquid quos voluptatibus neque voluptas assumenda quas nobis recusandae.',
            foto: 'https://www.dicasdemulher.com.br/wp-content/uploads/2013/06/como-se-organizar-para-ter-um-cachorrinho.jpg'
          }
        ]
        }
      />
    </div>
  )
}

export default Home
