import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DisplayState = {
  Active: "active",
  ThreadDeleted: "thread_deleted",
  PlatformMissing: "platform_missing",
} as const;
export type DisplayState = (typeof DisplayState)[keyof typeof DisplayState] | (string & {});

export const displayStateSchema: EnumSchema<DisplayState> = s.enumOf<DisplayState>(DisplayState);
