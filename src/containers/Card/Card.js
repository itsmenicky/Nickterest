import {Card} from '../../components/cards/Card';
import { useAppContext } from '../../store/AppContext';
import { openModalSavePinAction } from '../../store/actions';

export const CardContainer = (props) => {
    const {state, dispatch} = useAppContext()

    const handleClick = (id) => {
        console.log('clicou!!!', id)
        dispatch(openModalSavePinAction(id))
    }
    return(
      <Card {...props} onClick={handleClick}/>
    )
}