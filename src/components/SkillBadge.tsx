interface SkillBadgeProps {
  skill: string
}

const SkillBadge = ({ skill }: SkillBadgeProps) => {
  return <span>{skill}</span>
}

export default SkillBadge
