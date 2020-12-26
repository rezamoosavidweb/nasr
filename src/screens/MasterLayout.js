import { Grid } from '@material-ui/core'
import { useContext } from 'react'
import Card from '../components/Card'
import { MasterLayoutContext } from '../contexts/MasterLayoutContext'
import useStyles from '../styles/style'
import Table from '../components/Table'

export default function MasterLayout() {
    const classes = useStyles()
    let { myfruit } = useContext(MasterLayoutContext)
    return (
        <>
            <Grid container justify="center" alignItems="center">
                <Grid container className={classes.cardContainer}>
                    {myfruit && myfruit.map((item, index) => {
                        return (
                            <Grid item xs={3} key={index}>
                                <Card name={item.employee_name} price={item.employee_age} fruits={item} />
                            </Grid>
                        )
                    })
                    }
                </Grid >
            </Grid>
            <Grid container justify="center" alignItems="center">
                <Grid container className={classes.TableContainer}>
                    <Table />
                </Grid>
            </Grid>
        </>
    )
}
