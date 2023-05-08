import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Keyboard } from 'react-native';
import { Block, theme, Text } from 'galio-framework';

import { CourseCard } from '../../components/LMS';
import { topSellingCourses } from '../../constants/LMS';
const { width } = Dimensions.get('screen');
import Icon from '../../components/Icon';
import Input from '../../components/Input';
import {} from '../../constants/Theme'

class LMSSearch extends React.Component {
  renderSearch = () => {
    const { navigation } = this.props;
    return (
      <Input
        right
        color="black"
        style={styles.search}
        placeholder="What are you looking for?"
        placeholderTextColor={'#8898AA'}
        onFocus={() => {
        //   Keyboard.dismiss();
        }}
        iconContent={
          <Icon size={16} color={theme.COLORS.MUTED} name="zoom-bold2x" family="NowExtra" />
        }
      />
    );
  };

  renderArticles = () => {
    return (
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.topSellingCourses}>
        <Text h5>Top selling</Text>
        <Block flex>
          <CourseCard item={topSellingCourses[0]} horizontal />
          <CourseCard item={topSellingCourses[1]} horizontal />
          <CourseCard item={topSellingCourses[2]} horizontal />
          <CourseCard item={topSellingCourses[3]} horizontal />
        </Block>
      </ScrollView>
    );
  };

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderSearch()}
        {this.renderArticles()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
    padding: 10,
  },
  title: {
    paddingHorizontal: 9,
    paddingTop: 7,
    paddingBottom: 15
  },
  topSellingCourses: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
    paddingHorizontal: 2,
    fontFamily: 'montserrat-regular',
  },
});

export default LMSSearch;
