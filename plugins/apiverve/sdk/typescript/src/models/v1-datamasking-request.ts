import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1DatamaskingRequest = {
  /** The text containing sensitive data to mask */
  text: string;
  /** Array of data types to mask (default: all types) */
  types?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1DatamaskingRequestSchema: Schema<V1DatamaskingRequest> = s.object<V1DatamaskingRequest>(
  {
    text: s.string(),
    types: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
