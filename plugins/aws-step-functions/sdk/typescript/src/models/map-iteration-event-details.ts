import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MapIterationEventDetails = {
  /** The name of the iteration’s parent Map state. */
  name?: string;
  /** The index of the array belonging to the Map state iteration. */
  index?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mapIterationEventDetailsSchema: Schema<MapIterationEventDetails> =
  s.object<MapIterationEventDetails>(
    {
      name: s.optional(s.string()),
      index: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
