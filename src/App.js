import Customer from './components/Customer';

const customers = [
  {
    id: 1,
    image: 'http://placeimg.com/64/64/1',
    name: '루피',
    birthday: '961222',
    gender: '남자',
    job: '해적',
  },
  {
    id: 2,
    image: 'http://placeimg.com/64/64/2',
    name: '조로',
    birthday: '940112',
    gender: '남자',
    job: '검사',
  },
  {
    id: 3,
    image: 'http://placeimg.com/64/64/3',
    name: '나미',
    birthday: '980522',
    gender: '여자',
    job: '도둑',
  },
];

function App() {
  return (
    <div>
      {customers.map(c => {
        return (
          <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
          />
        );
      })}
    </div>
  );
}

export default App;
