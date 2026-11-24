import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { personalizeEventSchema, type PersonalizeEvent } from "./personalize-event.js";

/** A list of custom event definitions. */
export type EventList = {
  /** Array of event objects. */
  data?: PersonalizeEvent[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eventListSchema: Schema<EventList> = s.object<EventList>(
  {
    data: s.optional(s.array(s.lazy(() => personalizeEventSchema))),
  },
  { additionalProperties: s.json() },
);
