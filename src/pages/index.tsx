import RepositoryIntroCard from '@/components/RepositoryIntroCard'
import { repositorys } from '@/data/repositorys'

const Home = () => {
  return (
    <main className="w-full">
      <header>
        <h1>just4fun/just4now</h1>
        <em>
          <span>i like Terminal</span>
        </em>
      </header>
      <section>
        <em>
          <h2>Repositories</h2>
        </em>

        {repositorys.map((repository) => (
          <RepositoryIntroCard key={repository.name} repository={repository} />
        ))}
      </section>
      <footer></footer>
    </main>
  )
}

export default Home
