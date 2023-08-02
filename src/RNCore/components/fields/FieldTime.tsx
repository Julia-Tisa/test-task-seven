import { TextInput } from 'react-native';
import tw from '../../libs/tailwind';
import { useState } from 'react';
import { Button } from './ButtonTime';
import styles from '../../../styles/timeComponent';

interface ITimeField {
  class?: string // tailwind classes
  value: string | null // Если не задано отображаем --:--
  onChange?: (time: string) => void // событие должно вызываться при снятии фокуса с компонента.
  useButtons?: boolean // если true - отображаем кнопки "<" слева и справа ">" + или - 1 час соответственно
};

const validateTime = (value: string | null): string => {
  if(value) {
    const formattedValue = value.slice(0, 5);
    const regex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    return regex.test(formattedValue) ? formattedValue : '';
  }
  return '';
};

const maskTime = (value: string): string => {
  // replace non-numeric and unsuitable for hh:mm characters
  value = value.replace(/:|[a-zA-Z]/g, '');
  value = value.replace(/^[3-9]/g, '');
  value = value.replace(/^(2)([4-9])$/, '$1');
  value = value.replace(/^(\d{2})([6-9])$/, '$1');

  let totalCharactersInValue = value.length;

  if (totalCharactersInValue === 3) {
    return value.replace(/^(\d{2})(\d)$/, '$1:$2');
  }

  if (totalCharactersInValue >= 4) {
    return value.replace(/^(\d{2})(\d{2}).*/, '$1:$2');
  }

  return value;
};

export function FieldTime(props: ITimeField) {
  const [time, setTime] = useState(validateTime(props.value) || '');

  const handleChange = (value: string) => {
    setTime(maskTime(value));
  };

  const handleBlur = () => {
    if (props.onChange) {
      props.onChange(time);
    }
  };

  const handleFocus = () => {
    setTime('');
  };

  const handleIncrementHour = () => {
    if (time.length < 4) return;

    const currentTime = new Date(`2000-01-01T${time}`);
    currentTime.setHours(currentTime.getHours() + 1);
    setTime(currentTime.toString().slice(16, 21));
  };

  const handleDecrementHour = () => {
    if (time.length < 4) return;

    const currentTime = new Date(`2000-01-01T${time}`);
    currentTime.setHours(currentTime.getHours() - 1);
    setTime(currentTime.toString().slice(16, 21));
  };
  
  return ( 
    <div style={styles.containerStyle}>
      {props.useButtons && <Button side={'left'} onClick={handleDecrementHour} />}
      <TextInput
        onBlur={handleBlur}
        onFocus={handleFocus}
        onChangeText={handleChange}
        value={time}
        style={{ textAlign: 'center', ...tw`${props.class || ''}`}}
        placeholder="--:--"
      />
      {props.useButtons && <Button side={'right'} onClick={handleIncrementHour} />}
  </div>
  );
}
