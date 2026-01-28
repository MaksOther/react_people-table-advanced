import { useSearchParams } from 'react-router-dom';

export const PeopleFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const sex = searchParams.get('sex');
  const centuries = searchParams.getAll('centuries');
  const query = searchParams.get('query');

  const handleSexChange = (newSex: string | null) => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (newSex) {
      newSearchParams.set('sex', newSex);
    } else {
      newSearchParams.delete('sex');
    }

    setSearchParams(newSearchParams);
  };

  const handleResetFilters = () => {
    setSearchParams({});
  };

  const handleCentutyFilter = (century: string) => {
    const newSearchParams = new URLSearchParams(searchParams);

    const currentCenturies = newSearchParams.getAll('centuries');

    newSearchParams.delete('centuries');

    if (currentCenturies.includes(century)) {
      currentCenturies
        .filter(c => c !== century)
        .forEach(c => {
          newSearchParams.append('centuries', c);
        });
    } else {
      currentCenturies.forEach(c => {
        newSearchParams.append('centuries', c);
      });
      newSearchParams.append('centuries', century);
    }

    setSearchParams(newSearchParams);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchParams = new URLSearchParams(searchParams);
    const newQuery = e.target.value;

    if (newQuery) {
      newSearchParams.set('query', newQuery);
    } else {
      newSearchParams.delete('query');
    }

    setSearchParams(newSearchParams);
  };

  return (
    <nav className="panel">
      <p className="panel-heading">Filters</p>

      <p className="panel-tabs" data-cy="SexFilter">
        <a
          className={!sex ? 'is-active' : ''}
          onClick={e => {
            e.preventDefault();
            handleSexChange(null);
          }}
        >
          All
        </a>
        <a
          className={sex === 'm' ? 'is-active' : ''}
          onClick={e => {
            e.preventDefault();
            handleSexChange('m');
          }}
        >
          Male
        </a>
        <a
          className={sex === 'f' ? 'is-active' : ''}
          onClick={e => {
            e.preventDefault();
            handleSexChange('f');
          }}
        >
          Female
        </a>
      </p>

      <div className="panel-block">
        <p className="control has-icons-left">
          <input
            data-cy="NameFilter"
            type="search"
            className="input"
            placeholder="Search"
            value={query || ''}
            onChange={handleNameChange}
          />

          <span className="icon is-left">
            <i className="fas fa-search" aria-hidden="true" />
          </span>
        </p>
      </div>

      <div className="panel-block">
        <div className="level is-flex-grow-1 is-mobile" data-cy="CenturyFilter">
          <div className="level-left">
            <a
              data-cy="century"
              className={`button mr-1 ${centuries.includes('16') ? 'is-info' : ''}`}
              onClick={e => {
                e.preventDefault();
                handleCentutyFilter('16');
              }}
            >
              16
            </a>

            <a
              data-cy="century"
              className={`button mr-1 ${centuries.includes('17') ? 'is-info' : ''}`}
              onClick={e => {
                e.preventDefault();
                handleCentutyFilter('17');
              }}
            >
              17
            </a>

            <a
              data-cy="century"
              className={`button mr-1 ${centuries.includes('18') ? 'is-info' : ''}`}
              onClick={e => {
                e.preventDefault();
                handleCentutyFilter('18');
              }}
            >
              18
            </a>

            <a
              data-cy="century"
              className={`button mr-1 ${centuries.includes('19') ? 'is-info' : ''}`}
              onClick={e => {
                e.preventDefault();
                handleCentutyFilter('19');
              }}
            >
              19
            </a>

            <a
              data-cy="century"
              className={`button mr-1 ${centuries.includes('20') ? 'is-info' : ''}`}
              onClick={e => {
                e.preventDefault();
                handleCentutyFilter('20');
              }}
            >
              20
            </a>
          </div>

          <div className="level-right ml-4">
            <a
              data-cy="centuryALL"
              className="button is-success is-outlined"
              onClick={e => {
                e.preventDefault();
                const newParams = new URLSearchParams(searchParams);

                newParams.delete('centuries');
                setSearchParams(newParams);
              }}
            >
              All
            </a>
          </div>
        </div>
      </div>

      <div className="panel-block">
        <a
          className="button is-link is-outlined is-fullwidth"
          href="#/people"
          onClick={e => {
            e.preventDefault();
            handleResetFilters();
          }}
        >
          Reset all filters
        </a>
      </div>
    </nav>
  );
};
