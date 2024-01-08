import RepositoryIntroCard from '@/components/RepositoryIntroCard'
import { repositorys } from '@/data/repositorys'

const Home = () => {
  return (
    <main className="p-4 flex flex-col gap-4 sm:justify-center items-center sm:h-screen">
      <header className="flex flex-col gap-7 justify-center items-center">
        <h1 className="text-5xl opacity-80">Terminal Tools</h1>
        <em>
          <span>『 - i like Terminal - 』</span>
        </em>
      </header>
      <section className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {repositorys.map((repository) => (
            <RepositoryIntroCard key={repository.name} repository={repository} />
          ))}
        </div>
      </section>
      <footer></footer>
    </main>
  )
}

export default Home
