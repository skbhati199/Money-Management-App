import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import RootNavigation from "./src/navigation/RootNavigation";
import { Provider } from "react-redux";
import store from "./redux/store";
import {
  Button,
  DataTable,
  Title,
  Provider as PaperProvider,
  Divider,
} from "react-native-paper";
import useApp from "./hooks/useApp";

const PermissionStatus = ({
  READ_SMS_PERMISSION_STATUS,
  RECEIVE_SMS_PERMISSION_STATUS,
  requestReadSMSPermission,
}) => {
  console.log(
    "READ_SMS_PERMISSION_STATUS, RECEIVE_SMS_PERMISSION_STATUS:",
    READ_SMS_PERMISSION_STATUS,
    RECEIVE_SMS_PERMISSION_STATUS
  );
  return (
    <SafeAreaView>
      <View>
        <Text>{READ_SMS_PERMISSION_STATUS + "" || "null"}</Text>
        <Text>{RECEIVE_SMS_PERMISSION_STATUS + "" || "null"}</Text>
        {(!READ_SMS_PERMISSION_STATUS || !RECEIVE_SMS_PERMISSION_STATUS) && (
          <Button onPress={requestReadSMSPermission} mode="contained">
            Request Permission
          </Button>
        )}
      </View>
    </SafeAreaView>
  );
};

export default function App() {
  const {
    appState,
    buttonClickHandler,
    checkPermissions,
    errorCallbackStatus,
    hasReceiveSMSPermission,
    hasReadSMSPermission,
    requestReadSMSPermission,
    smsPermissionState,
    successCallbackStatus,
    smsValue,
    smsError,
  } = useApp();
  return (
    <PaperProvider>
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    </PaperProvider>
  );
}
