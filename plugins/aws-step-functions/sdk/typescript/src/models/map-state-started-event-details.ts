import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MapStateStartedEventDetails = {
  /** The size of the array for Map state iterations. */
  length?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mapStateStartedEventDetailsSchema: Schema<MapStateStartedEventDetails> =
  s.object<MapStateStartedEventDetails>(
    {
      length: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
