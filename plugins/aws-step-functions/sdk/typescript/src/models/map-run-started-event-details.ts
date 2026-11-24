import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MapRunStartedEventDetails = {
  /** The Amazon Resource Name (ARN) of a Map Run that was started. */
  mapRunArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mapRunStartedEventDetailsSchema: Schema<MapRunStartedEventDetails> =
  s.object<MapRunStartedEventDetails>(
    {
      mapRunArn: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
