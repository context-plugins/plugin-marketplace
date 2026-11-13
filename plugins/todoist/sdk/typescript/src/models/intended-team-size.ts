import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IntendedTeamSize = {
  Size1: "size_1",
  Size2To10: "size_2_to_10",
  Size11To50: "size_11_to_50",
  MoreThan50: "more_than_50",
  Size2To7: "size_2_to_7",
  Size8To15: "size_8_to_15",
  Size16To24: "size_16_to_24",
  MoreThan25: "more_than_25",
} as const;
export type IntendedTeamSize = (typeof IntendedTeamSize)[keyof typeof IntendedTeamSize] | (string & {});

export const intendedTeamSizeSchema: EnumSchema<IntendedTeamSize> =
  s.enumOf<IntendedTeamSize>(IntendedTeamSize);
