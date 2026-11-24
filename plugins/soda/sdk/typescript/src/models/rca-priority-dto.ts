import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RcaPriorityDto = {
  Low: "low",
  Medium: "medium",
  High: "high",
  Urgent: "urgent",
} as const;
export type RcaPriorityDto = (typeof RcaPriorityDto)[keyof typeof RcaPriorityDto] | (string & {});

export const rcaPriorityDtoSchema: EnumSchema<RcaPriorityDto> = s.enumOf<RcaPriorityDto>(RcaPriorityDto);
