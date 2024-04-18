import { useState, useEffect } from 'react';
import { SoccerItem } from './interfaces';

const SortableTable = ({ data }: { data: SoccerItem[] }) => {
  const [sortedColumn, setSortedColumn] = useState<keyof SoccerItem | null>(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const [sortedData, setSortedData] = useState(data);
  const [searchTerm, setSearchTerm] = useState('');

  const columns = [
    {
      key: 'strTeam',
      title: 'Name',
    },
    {
      key: 'intPoints',
      title: 'Points',
    },
    {
      key: 'intWin',
      title: 'Victories',
    },
    {
      key: 'intLoss',
      title: 'Losses',
    }
  ]

  useEffect(() => {
    // Filter the data based on the search term
    const filteredData = data.filter(item =>
      item.strTeam.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSortedData(filteredData);
  }, [data, searchTerm]);

  const handleSort = (columnName: keyof SoccerItem) => {
    const direction =
      columnName === sortedColumn && sortDirection === 'asc' ? 'desc' : 'asc';
    const sorted = [...sortedData].sort((a, b) => {
      if (columnName === 'strTeam') {
        // Sort by name
        return direction === 'asc' ? a[columnName].localeCompare(b[columnName]) : b[columnName].localeCompare(a[columnName]);
      } else {
        // Sort by points, victories, or losses
        return direction === 'asc' ? Number(a[columnName]) - Number(b[columnName]) : Number(b[columnName]) - Number(a[columnName]);
      }
    });

    setSortedColumn(columnName);
    setSortDirection(direction);
    setSortedData(sorted);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full bg-white text-gray-900 border border-gray-300 rounded-md px-4 py-2 mb-4"
      />
      <div className="shadow overflow-x-auto border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  onClick={() => handleSort(column.key as keyof SoccerItem)}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                >
                  {column.title}
                  {sortedColumn === column.key && (
                    <span className="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedData.map((row) => (
              <tr key={row.idTeam} className="hover:bg-gray-50">
                {columns.map((column) => (
                  <td key={`${row.idTeam}-${column.key}`} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {column.key === 'strTeam' ? (
                      <div className="flex items-center">
                        <img src={row['strTeamBadge']} alt={row[column.key]} className="h-8 w-8 mr-2" />
                        {row[column.key as keyof SoccerItem]}
                      </div>
                    ) : (
                      row[column.key as keyof SoccerItem]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SortableTable;
