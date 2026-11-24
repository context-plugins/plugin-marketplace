import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Defines which category of execution history events are logged. */
export const Level = {
  All: "ALL",
  Error: "ERROR",
  Fatal: "FATAL",
  Off: "OFF",
} as const;
export type Level = (typeof Level)[keyof typeof Level] | (string & {});

export const levelSchema: EnumSchema<Level> = s.enumOf<Level>(Level);
