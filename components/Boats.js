import React from 'react';
import {View, Text, Image} from 'react-native';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

// Ex1: User-defined component Boats with properties name, description and poster
const Boats = ({name, description, icon_name, icon_color, poster}) => {
    return (
        <View>
            <Text></Text>
            <Text style={{fontSize: 24}}>
                <FontAwesome6 name={icon_name} size={20} color= {icon_color} />
                {" " + name.toUpperCase()}
            </Text>
            <Text>
                {description}
            </Text>
            <Image source={poster}
                   style={{width: 400, height: 210}}/>
        </View>
    );
};

export default Boats;