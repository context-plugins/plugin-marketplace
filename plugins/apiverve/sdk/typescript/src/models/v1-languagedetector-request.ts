import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1LanguagedetectorRequest = {
  /** The text to detect the language of */
  text: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1LanguagedetectorRequestSchema: Schema<V1LanguagedetectorRequest> =
  s.object<V1LanguagedetectorRequest>(
    {
      text: s.string(),
    },
    { additionalProperties: s.json() },
  );
