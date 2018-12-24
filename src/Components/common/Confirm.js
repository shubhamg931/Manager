import React from 'react';
import {Modal, Text, View} from "react-native";
import {CardItem} from "./CardItem";
import {Button} from "native-base";

const Confirm = ({children, visible, onAccept, onDecline}) => {
    const {containerStyle, cardSectionStyle, textStyle} = styles;

    return (
      <Modal
          visible={visible}
          transparent
          animationType="slide"
          onRequestClose={()=>{}}
          >
          <View style={containerStyle}>
              <CardItem style={cardSectionStyle}>
                  <Text style={textStyle}>
                      {children}
                  </Text>
              </CardItem>
              <CardItem>
                  <Button onPress={onAccept} block>
                      <Text>
                          Yes
                      </Text>
                  </Button>
              </CardItem>
              <CardItem>
                  <Button onPress={onDecline} block>
                      <Text>
                          No
                      </Text>
                  </Button>
              </CardItem>
          </View>
      </Modal>
    );
};

const styles = {
    cardSectionStyle: {
        display: 'flex',
        justifyContent: 'center'
    },
    textStyle: {
        // flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba(0,0,0,0.75)',
        justifyContent: 'center'
    }
};

export {Confirm};