import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Source context for this result. Possible values depend on the result type. */
export const Source3 = {
  ExpertDetection: "EXPERT_DETECTION",
  EntityNlq: "ENTITY_NLQ",
  CalendarEvent: "CALENDAR_EVENT",
  Agent: "AGENT",
} as const;
export type Source3 = (typeof Source3)[keyof typeof Source3] | (string & {});

export const source3Schema: EnumSchema<Source3> = s.enumOf<Source3>(Source3);
