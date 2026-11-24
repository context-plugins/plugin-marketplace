import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1MorsecodeRequest = {
  /** The text to encode or decode in Morse code */
  text: string;
  /** Set to true to include an audio file of the Morse code */
  audio?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1MorsecodeRequestSchema: Schema<V1MorsecodeRequest> = s.object<V1MorsecodeRequest>(
  {
    text: s.string(),
    audio: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
