import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FallbackMode = {
  True: "true",
  False: "false",
} as const;
export type FallbackMode = (typeof FallbackMode)[keyof typeof FallbackMode] | (string & {});

export const fallbackModeSchema: EnumSchema<FallbackMode> = s.enumOf<FallbackMode>(FallbackMode);
