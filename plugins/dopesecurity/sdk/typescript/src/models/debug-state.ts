import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DebugState = {
  _0: "0",
  _1: "1",
  _2: "2",
} as const;
export type DebugState = (typeof DebugState)[keyof typeof DebugState] | (string & {});

export const debugStateSchema: EnumSchema<DebugState> = s.enumOf<DebugState>(DebugState);
