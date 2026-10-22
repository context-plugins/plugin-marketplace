import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The nature of the event, for example "out of office". */
export const EventType = {
  Default: "DEFAULT",
  OutOfOffice: "OUT_OF_OFFICE",
} as const;
export type EventType = (typeof EventType)[keyof typeof EventType] | (string & {});

export const eventTypeSchema: EnumSchema<EventType> = s.enumOf<EventType>(EventType);
