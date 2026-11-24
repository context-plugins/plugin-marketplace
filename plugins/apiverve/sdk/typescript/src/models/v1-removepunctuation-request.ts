import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1RemovepunctuationRequest = {
  /** The text to remove punctuation from */
  text: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1RemovepunctuationRequestSchema: Schema<V1RemovepunctuationRequest> =
  s.object<V1RemovepunctuationRequest>(
    {
      text: s.string(),
    },
    { additionalProperties: s.json() },
  );
