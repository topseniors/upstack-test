import { ADD_PERSON, ADD_DUMMY_PERSONS } from '../constants';

const mockData = [
  {
    id: 1,
    first_name: 'Sylvan',
    last_name: 'Jorg',
    email: 'sjorg0@deliciousdays.com',
    gender: 'Male',
    ip_address: '208.231.26.172',
  },
  {
    id: 2,
    first_name: 'Lorianne',
    last_name: 'Hanratty',
    email: 'lhanratty1@sun.com',
    gender: 'Female',
    ip_address: '82.194.206.3',
  },
  {
    id: 3,
    first_name: 'Catherina',
    last_name: 'Clamp',
    email: 'cclamp2@rakuten.co.jp',
    gender: 'Female',
    ip_address: '209.47.146.61',
  },
  {
    id: 4,
    first_name: 'Maribeth',
    last_name: 'Poile',
    email: 'mpoile3@smh.com.au',
    gender: 'Female',
    ip_address: '99.99.26.144',
  },
  {
    id: 5,
    first_name: 'Gilligan',
    last_name: 'Bearsmore',
    email: 'gbearsmore4@ted.com',
    gender: 'Female',
    ip_address: '66.35.170.184',
  },
  {
    id: 6,
    first_name: 'Catha',
    last_name: 'Dinnies',
    email: 'cdinnies5@businesswire.com',
    gender: 'Female',
    ip_address: '76.197.147.221',
  },
  {
    id: 7,
    first_name: 'Ruddy',
    last_name: 'Locksley',
    email: 'rlocksley6@cbsnews.com',
    gender: 'Male',
    ip_address: '240.115.123.186',
  },
  {
    id: 8,
    first_name: 'Beauregard',
    last_name: 'Stannislawski',
    email: 'bstannislawski7@indiegogo.com',
    gender: 'Male',
    ip_address: '209.180.65.185',
  },
  {
    id: 9,
    first_name: 'Waldemar',
    last_name: 'FitzGibbon',
    email: 'wfitzgibbon8@canalblog.com',
    gender: 'Male',
    ip_address: '60.241.5.239',
  },
  {
    id: 10,
    first_name: 'Vincents',
    last_name: 'Lawless',
    email: 'vlawless9@webmd.com',
    gender: 'Male',
    ip_address: '60.15.65.104',
  },
];

export default function person(state = { persons: mockData }, action) {
  const count = state.persons.length;
  switch (action.type) {
    case ADD_DUMMY_PERSONS:
      return {
        ...state,
        persons: state.persons.concat(action.payload),
      };
    case ADD_PERSON:
      return {
        ...state,
        persons: state.persons.concat([
          {
            id: count + 1,
            ...action.payload,
          },
        ]),
      };
    default:
      return state;
  }
}
