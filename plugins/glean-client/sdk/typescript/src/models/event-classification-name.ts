import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The name for a generated classification of an event. */
export const EventClassificationName = {
  ExternalEvent: "External Event",
} as const;
export type EventClassificationName =
  | (typeof EventClassificationName)[keyof typeof EventClassificationName]
  | (string & {});

export const eventClassificationNameSchema: EnumSchema<EventClassificationName> =
  s.enumOf<EventClassificationName>(EventClassificationName);
