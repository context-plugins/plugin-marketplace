import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TeamAcquisitionCohort = {
  Type1Unaware: "type_1_unaware",
  Type2Unconvinced: "type_2_unconvinced",
  Type3Reverted: "type_3_reverted",
} as const;
export type TeamAcquisitionCohort =
  | (typeof TeamAcquisitionCohort)[keyof typeof TeamAcquisitionCohort]
  | (string & {});

export const teamAcquisitionCohortSchema: EnumSchema<TeamAcquisitionCohort> =
  s.enumOf<TeamAcquisitionCohort>(TeamAcquisitionCohort);
