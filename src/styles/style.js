import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    cardBoxContainer: {
        padding: "10px 15px",
    },
    cardBox: {
        border: "1px solid #eee",
        cursor: "pointer",
        position: "relative"

    },
    FruitDetail: {
        padding: 10,
        backgroundColor: "#e1e1e1"
    },
    FruitName: {
        fontSize: 18
    },
    FruitPrice: {
        fontSize: 18,
        color: "#42d5b3"
    },
    fruitImage: {
        width: "100%"
    },
    cardContainer: {
        maxWidth: 1000
    },
    TableContainer: {
        maxWidth: 1000,
        marginTop: 50
    },
    hoverHighlite: {
        position: 'absolute',
        width: "70px",
        backgroundColor: "#42d5b39e",
        height: 50

    },
    button: {
        position: "absolute",
        height: 40,
        width: 90,
        top: 90,
        color: "#c41313",
        fontWeight:"bold"
    },

}));
export default useStyles



