import { Component } from 'react';
import Customer from './components/Customer';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material';
import { withStyles } from '@mui/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 1080,
  },
});

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

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
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
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
