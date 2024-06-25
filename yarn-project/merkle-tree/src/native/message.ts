import { Fr } from "@aztec/circuits.js";

export enum SystemMsgTypes { TERMINATE = 0, PING = 1, PONG = 2 };

const FIRST_APP_MSG_TYPE = 100;

export class MsgHeader {
  constructor(
    public messageId: number,
    public requestId: number,
  ) {

  }
}

export enum WorldStateMsgTypes {
  START_TREE_REQUEST = FIRST_APP_MSG_TYPE,
  START_TREE_RESPONSE,
  GET_TREE_INFO_REQUEST,
  GET_TREE_INFO_RESPONSE,
  INSERT_LEAVES_REQUEST,
  INSERT_LEAVES_RESPONSE,
};

export type StartTreeRequest = {
  name: string;
  depth: number;
  preFilledSize: number;
};

export type StartTreeResponse = {
  name: string;
  depth: number;
  success: boolean;
  message: string;
};

export type GetTreeInfoRequest = {
  name: string;
}

export type GetTreeInfoResponse = {
  name: string;
  depth: number;
  success: boolean;
  message: string;
  root: Buffer;
  size: bigint;
}

export type InsertLeavesRequest = {
  name: string;
  leaves: Buffer[];
}

export type InsertLeavesResponse = {
  success: boolean;
  message: string;
  root: Buffer;
  size: bigint;
}

export type MsgPackedType<T> = {
  msgType: number;
  header: MsgHeader;
  value: T;
}

export type MsgPackedHeader = MsgPackedType<{}>;