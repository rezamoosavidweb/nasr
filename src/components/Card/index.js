import { Button, Grid } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'
import useStyles from '../../styles/style'
import fruitss from '../../assets/images/download.jpg'
import { MasterLayoutContext } from '../../contexts/MasterLayoutContext'

export default function Card({ name, price, fruits }) {
    const classes = useStyles()
    const [hoverLayerWidth, setHoverLayerWidth] = useState(0)
    const [hoverLayerHeight, setHoverLayerHeight] = useState(0)
    const [showType, setShowType] = useState("")
    let { selectFruit, setselectFruit, selectId, setSelectId } = useContext(MasterLayoutContext)

    useEffect(() => {
        let img = document.querySelector('#Image')
        setHoverLayerWidth(img.offsetWidth);
        setHoverLayerHeight(img.offsetHeight);
    }, [])



    let handleCompare = (fruits) => {
        if (selectId.includes(fruits.id)) return
        setselectFruit([...selectFruit, fruits])
        setSelectId([...selectId, fruits.id])
        setShowType("remove")

    }



    let handleRemove = (fruits) => {
        setselectFruit(selectFruit.filter((item) => {
            if (item.id === fruits.id) {
                return false
            }
            return true
        }))
        setSelectId(selectId.filter((item) => {
            if (item === fruits.id) {
                return false
            }
            return true
        }))
        setShowType("compare")
    }
    return (
        <Grid container className={classes.cardBoxContainer} >
            <Grid container className={classes.cardBox}
                onMouseEnter={() => {
                    if (selectId.includes(fruits.id)) {
                        setShowType("remove")
                        return
                    } else {
                        setShowType("compare")
                    }
                }}
                onMouseLeave={() => {
                    setShowType("")
                }}>
                {selectId.includes(fruits.id) ? <Grid item className={classes.hoverHighlite} style={{ width: hoverLayerWidth, height: hoverLayerHeight }}></Grid> : null}
                {showType === "compare" ?
                    <Button
                        variant="outlined"
                        className={classes.button}
                        onClick={() => handleCompare(fruits)}
                        style={{ right: (hoverLayerWidth - 90) / 2 }}>compare</Button>
                    : showType === "remove" ?
                        <Button
                            variant="outlined"
                            className={classes.button}
                            onClick={() => handleRemove(fruits)}
                            style={{ right: (hoverLayerWidth - 90) / 2 }}>remove</Button>
                        : null
                }
                <img src={fruitss} className={classes.fruitImage} id="Image" />
                <Grid container alignItems="center" justify="space-between" className={classes.FruitDetail}>
                    <span className={classes.FruitName}>{name}</span>
                    <span className={classes.FruitPrice}>${price}</span>
                </Grid>
            </Grid>
        </Grid>
    )
}
