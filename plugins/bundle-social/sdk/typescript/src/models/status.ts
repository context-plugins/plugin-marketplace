import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status = {
  Draft: "DRAFT",
  Scheduled: "SCHEDULED",
  Posted: "POSTED",
  Error: "ERROR",
  Deleted: "DELETED",
  Processing: "PROCESSING",
  Review: "REVIEW",
  Retrying: "RETRYING",
} as const;
export type Status = (typeof Status)[keyof typeof Status] | (string & {});

export const statusSchema: EnumSchema<Status> = s.enumOf<Status>(Status);
