import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The state of the source API association. */
export const SourceApiAssociationStatus = {
  MergeScheduled: "MERGE_SCHEDULED",
  MergeFailed: "MERGE_FAILED",
  MergeSuccess: "MERGE_SUCCESS",
  MergeInProgress: "MERGE_IN_PROGRESS",
  AutoMergeScheduleFailed: "AUTO_MERGE_SCHEDULE_FAILED",
  DeletionScheduled: "DELETION_SCHEDULED",
  DeletionInProgress: "DELETION_IN_PROGRESS",
  DeletionFailed: "DELETION_FAILED",
} as const;
export type SourceApiAssociationStatus =
  | (typeof SourceApiAssociationStatus)[keyof typeof SourceApiAssociationStatus]
  | (string & {});

export const sourceApiAssociationStatusSchema: EnumSchema<SourceApiAssociationStatus> =
  s.enumOf<SourceApiAssociationStatus>(SourceApiAssociationStatus);
