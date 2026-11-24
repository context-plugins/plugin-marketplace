import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Describes a blocked resource issue. */
export type BlockedResource1 = {
  /** URL of the blocked resource. */
  url?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const blockedResource1Schema: Schema<BlockedResource1> = s.object<BlockedResource1>(
  {
    url: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
