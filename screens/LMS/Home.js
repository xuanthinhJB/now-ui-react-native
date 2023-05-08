import React from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";
import { Block, theme, Text } from "galio-framework";

import { CourseCard } from "../../components/LMS";
import { courses } from "../../constants/LMS";
const { width } = Dimensions.get("screen");

class LMSHome extends React.Component {
  renderArticles = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.courses}
      >
        <Block flex>
        <CourseCard item={courses[0]} horizontal />
          <Block flex row>
            <CourseCard
              item={courses[1]}
              style={{ marginRight: theme.SIZES.BASE }}
            />
            <CourseCard item={courses[2]} />
          </Block>
          <CourseCard item={courses[3]} horizontal />
          <CourseCard item={courses[4]} full />
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
    width: width
  },
  courses: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
    paddingHorizontal: 2,
    fontFamily: 'montserrat-regular'

  }
});

export default LMSHome;
