import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import buttonStyle from '../../../styles/button';

interface IButtonTime {
    side: string,
    onClick: () => void,
};

export function Button(props: IButtonTime) {
  return (
    <button style={buttonStyle} onClick={props.onClick}>
      <FontAwesomeIcon icon={props.side === 'left' ? faAngleLeft : faAngleRight} />
    </button>
  );
}
