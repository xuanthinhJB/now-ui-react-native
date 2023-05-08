import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme, Text } from 'galio-framework';

import { CourseCard } from '../../components/LMS';
import { myCourses } from '../../constants/LMS';
const { width } = Dimensions.get('screen');

class LMSMyLearning extends React.Component {
  renderArticles = () => {
    return (
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.myCourses}>
        <Block flex>
          <CourseCard item={myCourses[0]} horizontal />
          <CourseCard item={myCourses[1]} horizontal />
          <CourseCard item={myCourses[2]} horizontal />
          <CourseCard item={myCourses[3]} horizontal />
        </Block>
      </ScrollView>
    );
  };

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  myCourses: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
    paddingHorizontal: 2,
    fontFamily: 'montserrat-regular',
  },
});

export default LMSMyLearning;
