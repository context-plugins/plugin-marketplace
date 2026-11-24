import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Reason for staleness */
export const ReasonDevCycleManagementFeaturesV2Api = {
  Released: "released",
  Unused: "unused",
  UnmodifiedShort: "unmodifiedShort",
  UnmodifiedLong: "unmodifiedLong",
} as const;
export type ReasonDevCycleManagementFeaturesV2Api =
  | (typeof ReasonDevCycleManagementFeaturesV2Api)[keyof typeof ReasonDevCycleManagementFeaturesV2Api]
  | (string & {});

export const reasonDevCycleManagementFeaturesV2ApiSchema: EnumSchema<ReasonDevCycleManagementFeaturesV2Api> =
  s.enumOf<ReasonDevCycleManagementFeaturesV2Api>(ReasonDevCycleManagementFeaturesV2Api);
