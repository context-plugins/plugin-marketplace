import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Event catalog information. */
export type EventCatalogDto = {
  /** Event type */
  type?: string;
  /** Available versions for the event type */
  versions?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eventCatalogDtoSchema: Schema<EventCatalogDto> = s.object<EventCatalogDto>(
  {
    type: s.optional(s.string()),
    versions: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
