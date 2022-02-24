import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  Button,
  TextInput,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { WebView } from "react-native-webview";
import Constants from "expo-constants";
import { Video, AVPlaybackStatus } from "expo-av";
import Input from ".. / components/Input";

const { width, height } = Dimensions.get("window");

export default function Home() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [text, onChangeText] = React.useState("Insira aqui a URL do vídeo");
  const [number, onChangeNumber] = React.useState(null);
  const url =
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4";

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Bem-vindo</Text>
        <Text style={styles.subTitle}>App reprodutor de vídeo</Text>

        {/* Implementar formulário */}
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />

      </View>

      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: url,
        }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay={false}
        isLooping={false}
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />

      <View></View>
      <View style={styles.button}>
        <Button
          color="#fff"
          title={status.isPlaying ? "Pause" : "Play"}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    marginTop: 40,
    padding: 20,
    paddingTop: Platform.OS === "android" ? 50 : 0,
  },
  title: {
    fontSize: 24,
    fontWeight: "400",
    color: "#13293d",
  },
  subTitle: {
    fontSize: 14,
    fontWeight: "400",
    color: "#247ba0",
  },
  video: {
    marginTop: 60,
    alignSelf: "center",
    width: width,
    height: height / 3,
  },
  button: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#737373",
    marginHorizontal: 70,
    borderRadius: 6,
  },
  input: {
    marginHorizontal: 5,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
