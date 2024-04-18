import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import SortableTable from '../SortableTable';
import LeagueDropdown from '../LeagueDropdown';
import { SyncLoader } from 'react-spinners';

const Leaderboard = () => {
  const [selectedLeague, setSelectedLeague] = useState(4328);

  const { isPending, data, error } = useQuery({
    queryKey: ['leaderboard', selectedLeague],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://www.thesportsdb.com/api/v1/json/3/lookuptable.php?l=${selectedLeague}&s=2022-2023`
      );
      return data;
    }
  });

  const handleLeagueChange = (leagueId: number) => {
    setSelectedLeague(leagueId);
  };

  if (error) return <div>{`An error occurred ${error.message}`}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4 text-center">Leaderboard</h1>
      <div className="mb-4">
        <LeagueDropdown selectedLeague={selectedLeague} onLeagueChange={handleLeagueChange} />
      </div>
      {isPending ? (
        <div className="flex justify-center pt-10">
          <SyncLoader color={'#36D7B7'} size={10} />
        </div>
      ) : (
        <SortableTable data={data?.table || []} />
      )}
    </div>
  );
};

export default Leaderboard;
