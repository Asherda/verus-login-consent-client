import {
  ADD_CALLED_TIME,
  SET_RPC_APP_ID,
  SET_RPC_COIN_REQUEST,
  SET_RPC_EXPIRY_MARGIN,
  SET_RPC_PASSWORD,
  SET_RPC_PORT,
  SET_RPC_POST_ENCRYPTION,
} from "./rpc.types";

export const setRpcAppId = (appId) => {
  return {
    type: SET_RPC_APP_ID,
    payload: {
      appId
    }
  }
}

export const setRpcPassword = (password) => {
  return {
    type: SET_RPC_PASSWORD,
    payload: {
      password
    }
  }
}

export const setRpcPort = (port) => {
  return {
    type: SET_RPC_PORT,
    payload: {
      port
    }
  }
}

export const setRpcExpiryMargin = (expiryMargin) => {
  return {
    type: SET_RPC_EXPIRY_MARGIN,
    payload: {
      expiryMargin
    }
  }
}

export const addCalledTime = (time) => {
  return {
    type: ADD_CALLED_TIME,
    payload: {
      time
    }
  }
}

export const setRpcPostEncryption = (encryption) => {
  return {
    type: SET_RPC_POST_ENCRYPTION,
    payload: {
      encryption
    }
  }
}

export const setRpcCoinRequest = (coinRequest) => {
  return {
    type: SET_RPC_COIN_REQUEST,
    payload: {
      coinRequest
    }
  }
}