import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StageStatus = {
  StageStatusUnspecified: "STAGE_STATUS_UNSPECIFIED",
  StageStatusActive: "STAGE_STATUS_ACTIVE",
  StageStatusComplete: "STAGE_STATUS_COMPLETE",
  StageStatusFailed: "STAGE_STATUS_FAILED",
  StageStatusPending: "STAGE_STATUS_PENDING",
  StageStatusSkipped: "STAGE_STATUS_SKIPPED",
} as const;
export type StageStatus = (typeof StageStatus)[keyof typeof StageStatus] | (string & {});

export const stageStatusSchema: EnumSchema<StageStatus> = s.enumOf<StageStatus>(StageStatus);
