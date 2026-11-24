import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1TenseconverterRequest = {
  /** The text to convert to past or future tense */
  text: string;
  /** The tense to convert the text to */
  tense?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1TenseconverterRequestSchema: Schema<V1TenseconverterRequest> =
  s.object<V1TenseconverterRequest>(
    {
      text: s.string(),
      tense: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
