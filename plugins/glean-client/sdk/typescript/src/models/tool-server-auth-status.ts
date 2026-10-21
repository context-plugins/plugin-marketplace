import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Authentication status for the calling user. */
export const ToolServerAuthStatus = {
  AwaitingAuth: "AWAITING_AUTH",
  Authorized: "AUTHORIZED",
} as const;
export type ToolServerAuthStatus =
  | (typeof ToolServerAuthStatus)[keyof typeof ToolServerAuthStatus]
  | (string & {});

export const toolServerAuthStatusSchema: EnumSchema<ToolServerAuthStatus> =
  s.enumOf<ToolServerAuthStatus>(ToolServerAuthStatus);
