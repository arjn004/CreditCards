import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  Text,
  StyleSheet,
} from 'react-native';
import {colors} from '../../assets/colors/colors';
import SvgImageWrapper from '../../wrappers/svgImageWrapper/SvgImageWrapper';
import {
  addIcon,
  defenseIcon,
  dropIcon,
  fingurePrintIcon,
  flightIcon,
  printIcon,
  selectIcon,
} from '../../assets/svgimages/svgimages';
import SvgImageBackground from '../../Card/ImageBackground/SvgImageBackground';
import CustomText from '../../components/customText/CustomText';
import {Picker} from '@react-native-picker/picker';

const Body = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [cardType, setCardType] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [bankName, setBankName] = useState('');
  const [cards, setCards] = useState([]);

  const cardImages = [
    require('../../assets/pngImages/CardImage1.png'),
    require('../../assets/pngImages/CardImage2.png'),
    require('../../assets/pngImages/CardImage3.png'),
    require('../../assets/pngImages/CardImage4.png'),
    require('../../assets/pngImages/CardImage5.png'),
    require('../../assets/pngImages/CardImage6.png'),
    require('../../assets/pngImages/CardImage7.png'),
    require('../../assets/pngImages/CardImage8.png'),
    require('../../assets/pngImages/CardImage9.png'),
    require('../../assets/pngImages/CardImage10.png'),
  ];

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleSaveForm = () => {
    let num = Number(cardType);
    const newCard = {
      type: cardImages[num - 1],
      cardHolderName,
      expiryDate,
      cardNumber,
      bankName,
    };
    console.log(cardType);

    // Add new card to cards array
    setCards([...cards, newCard]);

    // Optionally, reset form fields and close modal
    resetFormFields();
    setModalVisible(false);
  };

  const resetFormFields = () => {
    setCardType('');
    setCardHolderName('');
    setExpiryDate('');
    setCardNumber('');
    setBankName('');
  };

  return (
    <View style={{backgroundColor: colors.grey, flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
          alignItems: 'center',
          paddingHorizontal: 10,
        }}>
        <SvgImageWrapper xml={fingurePrintIcon} width={51} height={51} />
        <SvgImageWrapper xml={flightIcon} width={34} height={34} />
        <SvgImageWrapper xml={dropIcon} width={34} height={34} />
        <SvgImageWrapper xml={defenseIcon} width={34} height={34} />
        <SvgImageWrapper xml={selectIcon} width={34} height={34} />
        <SvgImageWrapper xml={printIcon} width={34} height={34} />
      </View>
      <View
        style={{
          marginTop: 40,
          marginLeft: 5,
          paddingHorizontal: 10,
          position: 'relative',
          height: 200,
        }}>
        {cards.length > 0 ? (
          cards.map((card, index) => (
            <View
              key={index}
              style={{position: 'absolute', top: index * 50, left: 0}}>
              <SvgImageBackground
                cardimageType={card.type}
                cardHolderName={card.cardHolderName}
                expiryDate={card.expiryDate}
                cardNumber={card.cardNumber}
                bankName={card.bankName}
              />
            </View>
          ))
        ) : (
          <CustomText textStyle={{alignItems: "center", justifyContent: "center"}} label="No Cards" />
        )}
      </View>

      <TouchableOpacity
        style={{
          borderRadius: 999,
          height: 102,
          width: 102,
          backgroundColor: colors.white,
          position: 'absolute',
          bottom: 50,
          right: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={handleOpenModal}>
        <SvgImageWrapper xml={addIcon} height={10} width={10} />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}>
          <View
            style={{
              backgroundColor: colors.white,
              padding: 20,
              borderRadius: 10,
              width: '80%',
            }}>
            <Picker
              selectedValue={cardType}
              style={{height: 50, width: '100%', color: colors.black}}
              onValueChange={(itemValue, itemIndex) => setCardType(itemValue)}>
              <Picker.Item label="Select Card Image" value="" />
              {cardImages.map((image, index) => (
                <Picker.Item
                  key={index}
                  label={`Card Image ${index + 1}`}
                  value={image}
                />
              ))}
            </Picker>

            <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                marginBottom: 10,
                paddingHorizontal: 10,
                color: colors.black
              }}
              placeholder="Card Holder Name"
              placeholderTextColor={colors.black}
              value={cardHolderName}
              onChangeText={text => setCardHolderName(text)}
            />
            <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                marginBottom: 10,
                paddingHorizontal: 10,
                color: colors.black
              }}
              placeholder="Expiry Date"
              placeholderTextColor={colors.black}
              value={expiryDate}
              onChangeText={text => setExpiryDate(text)}
            />
            <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                marginBottom: 10,
                paddingHorizontal: 10,
                color: colors.black
              }}
              placeholder="Card Number"
              placeholderTextColor={colors.black}
              value={cardNumber}
              onChangeText={text => setCardNumber(text)}
            />
            <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                marginBottom: 10,
                paddingHorizontal: 10,
                color: colors.black
              }}
              placeholder="Bank Name"
              placeholderTextColor={colors.black}
              value={bankName}
              onChangeText={text => setBankName(text)}
            />
            <TouchableOpacity
              style={{
                backgroundColor: colors.black,
                padding: 10,
                borderRadius: 5,
                alignItems: 'center',
              }}
              onPress={handleSaveForm}>
              <Text style={{color: colors.white}}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: colors.grey,
                padding: 10,
                borderRadius: 5,
                alignItems: 'center',
                marginTop: 10,
              }}
              onPress={handleCloseModal}>
              <Text style={{color: colors.white}}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Body;
