const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
  res.send([
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
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
