/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Alert,AsyncStorage, Button,
        SectionList,TouchableOpacity,Image} from 'react-native';

var arrow_left=require('./arrow_left.png');

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
  }

  _sectionHeader = (info) => {
    var txt = info.section.key;
    return <Text
      style={{ height: 80, textAlign: 'center', textAlignVertical: 'center', backgroundColor: 'green', color: 'white', fontSize: 30 }}>{txt}</Text>
  }

  _renderItem = (info) => {
    var txt = '  ' + info.item.title;
    return <Text
      style={{ height: 60, textAlignVertical: 'center', backgroundColor: "#ffffff", color: '#5C5C5C', fontSize: 15 }}>{txt}</Text>
  }

  render() {

    var sections = [
      { key: "ہمارے شہر", data: [{ title: "لاہور" }, { title: "کراچی" }, { title: "اسلام آباد" }] },
      { key: "ہمارے کھیل", data: [{ title: "ہاکی" }, { title: "کرکٹ" }, { title: "کبڈی" }, { title: "گلی ڈنڈہ" }, { title: "کوئی اور" }] },
      { key: "ہمارے تعلیمی ادارے", data: [{ title: "پنجاب یونیورسٹی" }, { title: "افرو ایشین" }] },
      { key: "ہمارے مدرسے", data: [{ title: "جامعہ نعیمیہ" }, { title: "جامعہ اشرفیہ" }, { title: "جامعہ دارالعلوم" },{ title: "جامعہ بنوری" }, { title: "جامعہ ہندسیہ" }, { title: "جامعہ کراچی" }] },
    ];

    return (
      <View style={{ flex: 1 }}>
        <SectionList
          sections={sections}
          renderSectionHeader={this._sectionHeader}
          renderItem={this._renderItem}

          ItemSeparatorComponent={() => <View><Text>____________________</Text></View>}
          ListHeaderComponent={() => <View style={{ backgroundColor: '#25B960', alignItems: 'center', height: 40 }}><Text style={{ fontSize: 18, color: '#ffffff' }}>سب سے اوپر</Text></View>}
          ListFooterComponent={() => <View style={{ backgroundColor: '#25B960', alignItems: 'center', height: 40 }}><Text style={{ fontSize: 18, color: '#ffffff' }}>سب سے نیچے</Text></View>}
        />
      </View>
    );
  }
}
