import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1UrlencodeRequest = {
  /** The text to encode */
  text: string;
  /** The action to perform */
  action?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1UrlencodeRequestSchema: Schema<V1UrlencodeRequest> = s.object<V1UrlencodeRequest>(
  {
    text: s.string(),
    action: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
