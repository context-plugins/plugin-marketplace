import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1SlugifyRequest = {
  /** The text to convert to a slug */
  text: string;
  /** The separator character */
  separator?: string;
  /** Convert to lowercase (default: true) */
  lowercase?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1SlugifyRequestSchema: Schema<V1SlugifyRequest> = s.object<V1SlugifyRequest>(
  {
    text: s.string(),
    separator: s.optional(s.string()),
    lowercase: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
