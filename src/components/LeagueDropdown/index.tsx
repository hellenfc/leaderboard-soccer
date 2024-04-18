
interface LeagueDropdownProps {
  selectedLeague: number;
  onLeagueChange: (leagueId: number) => void;
}

const LeagueDropdown = ({ selectedLeague, onLeagueChange }: LeagueDropdownProps) => {
  const leagues = [
    { id: 4328, name: 'Premier League' },
    { id: 4332, name: 'Italian Serie A' },
    { id: 4335, name: 'Spanish La Liga' },
  ];

  return (
    <div>
      <label htmlFor="league">Select League:</label>
      <select
        id="league"
        value={selectedLeague}
        onChange={(e) => onLeagueChange(Number(e.target.value))}
        className="block w-full bg-white border border-gray-300 rounded-md px-4 py-2"
      >
        {leagues.map((league) => (
          <option key={league.id} value={league.id}>
            {league.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LeagueDropdown;
