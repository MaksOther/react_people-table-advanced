import React from 'react';
import { Link } from 'react-router-dom';
import { Person } from '../types';
import classNames from 'classnames';
import { useSearchParams } from 'react-router-dom';

type Props = {
  person: Person;
};

export const SearchLink: React.FC<Props> = ({ person }) => {
  const [searchParams] = useSearchParams();

  return (
    <Link
      to={`/people/${person.slug}?${searchParams.toString()}`}
      className={classNames({ 'has-text-danger': person.sex === 'f' })}
    >
      {person.name}
    </Link>
  );
};
