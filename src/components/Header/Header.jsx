/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
  faCalendarDays,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';

import './Header.css';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

// eslint-disable-next-line react/prop-types
export default function Header({ type }) {
  const [isOpenDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [isOpenOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => ({
      ...prev,
      [name]: operation === 'inc' ? options[name] + 1 : options[name] - 1,
    }));
  };

  return (
    <div className="header">
      <div
        className={
          type === 'list' ? 'headerContainer listMode' : 'headerContainer'
        }
      >
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>

        {type !== 'list' && (
          <>
            <h1 className="headerTitle">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="headerDesc">
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Booking.com account
            </p>
            <button
              type="button"
              className="headerBtn"
            >
              Sign In / Register
            </button>
            <div className="headerSearch headerIcon">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                />
              </div>
              <div
                className="headerSearchItem"
                onClick={() => setOpenDate(!isOpenDate)}
              >
                <FontAwesomeIcon icon={faCalendarDays} />
                <span className="headerSearchText">
                  {`${format(date[0].startDate, 'E, MMM d')}`} —{' '}
                  {`${format(date[0].endDate, 'E, MMM d')}`}
                </span>
                {isOpenDate && (
                  <DateRange
                    editableDateInputs
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                  />
                )}
              </div>
              <div
                className="headerSearchItem"
                onClick={() => setOpenOptions(!isOpenOptions)}
              >
                <FontAwesomeIcon icon={faUser} />
                <span className="headerSearchText">
                  {`${options.adult}`} adults ・{`${options.children}`} children
                  ・ {`${options.room}`} room
                </span>
                {isOpenOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adults</span>
                      <div className="optionCounter">
                        <button
                          type="button"
                          disabled={options.adult <= 1}
                          className="optionCounterBtn"
                          onClick={() => handleOption('adult', 'dec')}
                        >
                          −
                        </button>
                        <span className="optionCounter">{options.adult}</span>
                        <button
                          type="button"
                          className="optionCounterBtn"
                          onClick={() => handleOption('adult', 'inc')}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          type="button"
                          disabled={options.children <= 0}
                          className="optionCounterBtn"
                          onClick={() => handleOption('children', 'dec')}
                        >
                          −
                        </button>
                        <span className="optionCounter">
                          {options.children}
                        </span>
                        <button
                          type="button"
                          className="optionCounterBtn"
                          onClick={() => handleOption('children', 'inc')}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Rooms</span>
                      <div className="optionCounter">
                        <button
                          type="button"
                          disabled={options.room <= 1}
                          className="optionCounterBtn"
                          onClick={() => handleOption('room', 'dec')}
                        >
                          −
                        </button>
                        <span className="optionCounter">{options.room}</span>
                        <button
                          type="button"
                          className="optionCounterBtn"
                          onClick={() => handleOption('room', 'inc')}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button
                  type="button"
                  className="headerBtn"
                >
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
