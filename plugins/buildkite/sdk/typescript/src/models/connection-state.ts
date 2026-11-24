import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ConnectionState = {
  Connected: "connected",
  Disconnected: "disconnected",
  Stopped: "stopped",
  Stopping: "stopping",
  Lost: "lost",
  NeverConnected: "never_connected",
} as const;
export type ConnectionState = (typeof ConnectionState)[keyof typeof ConnectionState] | (string & {});

export const connectionStateSchema: EnumSchema<ConnectionState> = s.enumOf<ConnectionState>(ConnectionState);
