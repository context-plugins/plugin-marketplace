import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Semantically groups content of a certain type. It can be used for purposes such as differential
 * UI treatment. USER authored messages should be of type CONTENT and do not need `messageType`
 * specified.
 */
export const MessageType = {
  Update: "UPDATE",
  Content: "CONTENT",
  Context: "CONTEXT",
  Control: "CONTROL",
  ControlStart: "CONTROL_START",
  ControlFinish: "CONTROL_FINISH",
  ControlCancel: "CONTROL_CANCEL",
  ControlRetry: "CONTROL_RETRY",
  ControlUnknown: "CONTROL_UNKNOWN",
  Debug: "DEBUG",
  DebugExternal: "DEBUG_EXTERNAL",
  Error: "ERROR",
  Heading: "HEADING",
  Warning: "WARNING",
  ServerTool: "SERVER_TOOL",
} as const;
export type MessageType = (typeof MessageType)[keyof typeof MessageType] | (string & {});

export const messageTypeSchema: EnumSchema<MessageType> = s.enumOf<MessageType>(MessageType);
