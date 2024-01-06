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
    <div>
      <a href={repository.link}>{repository.name}</a>
      <p>{repository.description}</p>
      <div>
        {repository.stacks.map((stack) => (
          <div key={stack}>
            <SkillBadge skill={stack} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default RepositoryIntroCard
