import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Approver status DTO. */
export const ApproverStatusDto = {
  Waiting: "WAITING",
  Viewed: "VIEWED",
  Rerouted: "REROUTED",
  Denied: "DENIED",
  Approved: "APPROVED",
  Upcoming: "UPCOMING",
  Stale: "STALE",
  Undefined: "UNDEFINED",
} as const;
export type ApproverStatusDto = (typeof ApproverStatusDto)[keyof typeof ApproverStatusDto] | (string & {});

export const approverStatusDtoSchema: EnumSchema<ApproverStatusDto> =
  s.enumOf<ApproverStatusDto>(ApproverStatusDto);
