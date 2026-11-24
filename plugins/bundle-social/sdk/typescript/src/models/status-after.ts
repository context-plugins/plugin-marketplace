import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusAfter = {
  Draft: "DRAFT",
  Scheduled: "SCHEDULED",
  Posted: "POSTED",
  Error: "ERROR",
  Deleted: "DELETED",
  Processing: "PROCESSING",
  Review: "REVIEW",
  Retrying: "RETRYING",
} as const;
export type StatusAfter = (typeof StatusAfter)[keyof typeof StatusAfter] | (string & {});

export const statusAfterSchema: EnumSchema<StatusAfter> = s.enumOf<StatusAfter>(StatusAfter);
