import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** AP Card response status. */
export const ApCardStatus = {
  Active: "ACTIVE",
  Inactive: "INACTIVE",
  Deleted: "DELETED",
  Pending: "PENDING",
  Draft: "DRAFT",
  DraftDeleted: "DRAFT_DELETED",
  Frozen: "FROZEN",
  Undefined: "UNDEFINED",
} as const;
export type ApCardStatus = (typeof ApCardStatus)[keyof typeof ApCardStatus] | (string & {});

export const apCardStatusSchema: EnumSchema<ApCardStatus> = s.enumOf<ApCardStatus>(ApCardStatus);
