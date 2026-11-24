import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Event = {
  ResponseCreated: "response.created",
  ResponseUpdated: "response.updated",
  DraftAbandoned: "draft.abandoned",
} as const;
export type Event = (typeof Event)[keyof typeof Event] | (string & {});

export const eventSchema: EnumSchema<Event> = s.enumOf<Event>(Event);
