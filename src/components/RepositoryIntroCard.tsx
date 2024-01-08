import SkillBadge from '@/components/SkillBadge'

export interface Repository {
  name: string
  link: string
  description: string
  stacks: string[]
  imageUrl: string
}

interface RepositoryIntroCardProps {
  repository: Repository
}

const RepositoryIntroCard = ({ repository }: RepositoryIntroCardProps) => {
  return (
    <div className="flex flex-col gap-2 p-4 rounded-md transition-all duration-300 ease-in-out transform group hover:opacity-80 hover:bg-gray-100 hover:shadow-lg hover:shadow-purple-500">
      <a href={repository.link}>
        <p className="group-hover:text-purple-500">{repository.name}</p>
        <p>{repository.description}</p>
        <div className="flex gap-1">
          {repository.stacks.map((stack) => (
            <div key={stack}>
              <SkillBadge skill={stack} />
            </div>
          ))}
        </div>
      </a>
    </div>
  )
}

export default RepositoryIntroCard
