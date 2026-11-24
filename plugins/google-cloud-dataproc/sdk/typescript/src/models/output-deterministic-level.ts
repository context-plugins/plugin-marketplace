import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OutputDeterministicLevel = {
  DeterministicLevelUnspecified: "DETERMINISTIC_LEVEL_UNSPECIFIED",
  DeterministicLevelDeterminate: "DETERMINISTIC_LEVEL_DETERMINATE",
  DeterministicLevelUnordered: "DETERMINISTIC_LEVEL_UNORDERED",
  DeterministicLevelIndeterminate: "DETERMINISTIC_LEVEL_INDETERMINATE",
} as const;
export type OutputDeterministicLevel =
  | (typeof OutputDeterministicLevel)[keyof typeof OutputDeterministicLevel]
  | (string & {});

export const outputDeterministicLevelSchema: EnumSchema<OutputDeterministicLevel> =
  s.enumOf<OutputDeterministicLevel>(OutputDeterministicLevel);
