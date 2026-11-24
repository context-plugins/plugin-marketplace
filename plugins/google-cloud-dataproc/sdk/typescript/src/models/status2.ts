import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status2 = {
  StageStatusUnspecified: "STAGE_STATUS_UNSPECIFIED",
  StageStatusActive: "STAGE_STATUS_ACTIVE",
  StageStatusComplete: "STAGE_STATUS_COMPLETE",
  StageStatusFailed: "STAGE_STATUS_FAILED",
  StageStatusPending: "STAGE_STATUS_PENDING",
  StageStatusSkipped: "STAGE_STATUS_SKIPPED",
} as const;
export type Status2 = (typeof Status2)[keyof typeof Status2] | (string & {});

export const status2Schema: EnumSchema<Status2> = s.enumOf<Status2>(Status2);
