export function ProjectList() {
  return (
    <div>
      <h2 className="text-2xl mb-4">Prosjekter</h2>
      <ul className="pl-4 list-disc space-y-4">
        <li>
          <h3 className="text-lg">Tetris</h3>
          <p className="text-sm">Første semesteroppgave jeg hadde i INF101</p>
        </li>
        <li>
          <h3 className="text-lg">Egen hjemmeside</h3>
          <p className="text-sm">
            En nettside jeg lagde på workshop med echo Webkom
          </p>
        </li>
      </ul>
    </div>
  );
}

