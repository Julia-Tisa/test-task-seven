import {Col1} from "./src/RNCore/components/markup/markup";
import {FieldTime} from "./src/RNCore/components/fields/FieldTime";
import React from "react";
import {EDate} from "./src/RNCore/sugar/date";
import {Text} from "react-native";

export default function App() {
    return (
        <Col1 class={'m-5'}>
            <Text>Привет! Ниже должно быть по больше примеров использования готового компонента. </Text>
            <Text>Разной ширины, с разным фоном и цветом шрифта</Text>
                <FieldTime
                    class={'mt-2 bg-primary'}
                    value={null}
                />
                <FieldTime
                    class={'mt-2 bg-danger'}
                    value={new EDate().isoDate()}
                />
                <FieldTime
                    class={'w-50 mt-2 bg-success'}
                    value={null}
                />
                <FieldTime
                    class={'w-70 mt-2 bg-bodyLogin text-white'}
                    value={new EDate().isoTime()}
                    useButtons={true}
                />
                <FieldTime
                    class={'w-100 mt-2 bg-warningHover text-alphaBlack'}
                    value={'25:44'}
                    onChange={(time) => alert(`Selected time: ${time ? time : 'not selected'}`)}
                />
                <FieldTime
                    class={'w-10 mt-2 bg-transparent text-danger'}
                    value={'12:18'}
                    useButtons={true}
                />
                
                <FieldTime
                    class={'w-25 mt-2 bg-silver text-white'}
                    value={'08:30'}
                />

                <FieldTime
                    class={'w-40 mt-2 bg-body'}
                    value={null}
                    useButtons={true}
                />

                <FieldTime
                    class={'mt-2 bg-alphaBlack text-white'}
                    value={'23:15'}
                />

                <FieldTime
                    class={'mt-2 bg-inherit text-success'}
                    value={'10:00'}
                    onChange={(time) => console.log(`Selected time: ${time ? time : 'not selected'}`)}
                />
        </Col1>

    );
}
