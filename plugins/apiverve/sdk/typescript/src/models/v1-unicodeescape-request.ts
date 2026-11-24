import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1UnicodeescapeRequest = {
  /** The text to escape */
  text: string;
  /** The action to perform */
  action?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1UnicodeescapeRequestSchema: Schema<V1UnicodeescapeRequest> = s.object<V1UnicodeescapeRequest>(
  {
    text: s.string(),
    action: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
