
import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { MasterLayoutContext } from '../../contexts/MasterLayoutContext';
import useStyles from '../../styles/style';



export default function BasicTable() {
    const classes = useStyles();
    let { selectFruit } = useContext(MasterLayoutContext)

    let a=selectFruit.sort((a,b)=>{
        if(a.employee_age>b.employee_age){
            return -1
        } else{
            return 1
        }
    })
    let b=[...a]

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        {selectFruit.map((item,index) => { return <TableCell key={index} align="right">{item.employee_name}</TableCell> })}

                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow >
                        <TableCell component="th" scope="row">
                            price
                            </TableCell>
                        {selectFruit.map((item,index) => { return <TableCell key={index} align="right">{item.employee_age}</TableCell> })}

                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}