import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1MurmurhashRequest = {
  /** The text to hash */
  text: string;
  /** Seed value for the hash function */
  seed?: number;
  /** Hash variant: 32 (32-bit) or 128 (128-bit) */
  variant?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1MurmurhashRequestSchema: Schema<V1MurmurhashRequest> = s.object<V1MurmurhashRequest>(
  {
    text: s.string(),
    seed: s.optional(s.int()),
    variant: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
