interface Skill {
  id: number;
  name: string;
  category: string;
  proficiency: number;
}

interface SkillBadgeProps {
  skill: Skill;
}

function getProficiencyLabel(proficiency: number): string {
  if (proficiency >= 90) return 'Expert';
  if (proficiency >= 75) return 'Advanced';
  if (proficiency >= 60) return 'Intermediate';
  return 'Beginner';
}

function getProficiencyColor(proficiency: number): string {
  if (proficiency >= 90) return 'bg-green-500';
  if (proficiency >= 75) return 'bg-blue-500';
  if (proficiency >= 60) return 'bg-yellow-500';
  return 'bg-slate-400';
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  const label = getProficiencyLabel(skill.proficiency);
  const barColor = getProficiencyColor(skill.proficiency);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 card-hover">
      <div className="flex items-center justify-between mb-3">
        <span className="font-semibold text-slate-700 dark:text-slate-200 text-sm">
          {skill.name}
        </span>
        <span
          className={`text-xs font-medium px-2 py-0.5 rounded-full ${
            skill.proficiency >= 90
              ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
              : skill.proficiency >= 75
              ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
              : skill.proficiency >= 60
              ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
              : 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400'
          }`}
        >
          {label}
        </span>
      </div>
      <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2">
        <div
          className={`h-2 rounded-full ${barColor} transition-all duration-1000`}
          style={{ width: `${skill.proficiency}%` }}
        ></div>
      </div>
      <div className="mt-1 text-right">
        <span className="text-xs text-slate-400 dark:text-slate-500">
          {skill.proficiency}%
        </span>
      </div>
    </div>
  );
}
