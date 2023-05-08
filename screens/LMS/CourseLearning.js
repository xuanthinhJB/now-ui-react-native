import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Keyboard } from 'react-native';
import { Block, theme, Text } from 'galio-framework';

import { CourseCard } from '../../components/LMS';
import { topSellingCourses } from '../../constants/LMS';
const { width } = Dimensions.get('screen');
import Icon from '../../components/Icon';
import Input from '../../components/Input';
import {} from '../../constants/Theme';
import Video from 'react-native-video';

class LMSCourseLearning extends React.Component {
  renderVideo = () => {
    return (
      <Video
        source={{
          uri: 'http://45.13.132.203:3030/api/stream-video/video',
          type: 'mp4',
          headers: {
            range: 'bytes=0-',
          },
          paused: false,
          style: {
            height: '40%',
            marginBottom: '2%',
          },
          repeat: true,
        }}
      />
    );
  };

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderVideo()}
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
    paddingBottom: 15,
  },
  topSellingCourses: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
    paddingHorizontal: 2,
    fontFamily: 'montserrat-regular',
  },
});

export default LMSCourseLearning;
