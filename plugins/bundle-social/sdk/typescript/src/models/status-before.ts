import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusBefore = {
  Draft: "DRAFT",
  Scheduled: "SCHEDULED",
  Posted: "POSTED",
  Error: "ERROR",
  Deleted: "DELETED",
  Processing: "PROCESSING",
  Review: "REVIEW",
  Retrying: "RETRYING",
} as const;
export type StatusBefore = (typeof StatusBefore)[keyof typeof StatusBefore] | (string & {});

export const statusBeforeSchema: EnumSchema<StatusBefore> = s.enumOf<StatusBefore>(StatusBefore);
