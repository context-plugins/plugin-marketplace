import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Event types detected in the article. */
export type EventTypeHolder = {
  /** Detected event name. */
  name?: string | null;
  /** Detected event classification. */
  type?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eventTypeHolderSchema: Schema<EventTypeHolder> = s.object<EventTypeHolder>(
  {
    name: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
