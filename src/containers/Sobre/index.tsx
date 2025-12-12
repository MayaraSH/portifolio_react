import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis vero
      inventore, quaerat necessitatibus repudiandae ex? Eligendi in impedit,
      illo recusandae distinctio, enim commodi delectus harum tempore suscipit
      dolor nemo nam?
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats-git-masterorg-github-readme-stats-team.vercel.app/api?username=MayaraSH&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats-git-masterorg-github-readme-stats-team.vercel.app/api/top-langs/?username=MayaraSH&layout=compact&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
