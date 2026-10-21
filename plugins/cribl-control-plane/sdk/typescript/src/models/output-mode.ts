import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Format of the returned output */
export const OutputMode = {
  Csv: "csv",
  Json: "json",
} as const;
export type OutputMode = (typeof OutputMode)[keyof typeof OutputMode] | (string & {});

export const outputModeSchema: EnumSchema<OutputMode> = s.enumOf<OutputMode>(OutputMode);
