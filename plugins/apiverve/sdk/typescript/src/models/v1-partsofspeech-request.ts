import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1PartsofspeechRequest = {
  /** The text to extract words from */
  text: string;
  /** The part of speech to extract. Defaults to nouns */
  partofspeech?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1PartsofspeechRequestSchema: Schema<V1PartsofspeechRequest> = s.object<V1PartsofspeechRequest>(
  {
    text: s.string(),
    partofspeech: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
