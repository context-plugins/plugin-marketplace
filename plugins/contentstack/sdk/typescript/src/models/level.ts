import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Log level. */
export const Level = {
  Info: "info",
  Warn: "warn",
  Error: "error",
  Debug: "debug",
} as const;
export type Level = (typeof Level)[keyof typeof Level] | (string & {});

export const levelSchema: EnumSchema<Level> = s.enumOf<Level>(Level);
