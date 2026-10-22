import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Current external-source sync status. */
export const PlatformSkillSyncStatus = {
  UpToDate: "UP_TO_DATE",
  UpdateAvailable: "UPDATE_AVAILABLE",
  SyncFailed: "SYNC_FAILED",
} as const;
export type PlatformSkillSyncStatus =
  | (typeof PlatformSkillSyncStatus)[keyof typeof PlatformSkillSyncStatus]
  | (string & {});

export const platformSkillSyncStatusSchema: EnumSchema<PlatformSkillSyncStatus> =
  s.enumOf<PlatformSkillSyncStatus>(PlatformSkillSyncStatus);
