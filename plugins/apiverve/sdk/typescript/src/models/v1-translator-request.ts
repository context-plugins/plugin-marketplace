import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1TranslatorRequest = {
  /** The text to translate */
  text: string;
  /** The language code to translate the text to (e.g., fr, es, de) */
  target: string;
  /**
   * The language code of the text to translate (e.g., en). If left blank, language will be
   * auto-detected
   */
  source?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1TranslatorRequestSchema: Schema<V1TranslatorRequest> = s.object<V1TranslatorRequest>(
  {
    text: s.string(),
    target: s.string(),
    source: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
