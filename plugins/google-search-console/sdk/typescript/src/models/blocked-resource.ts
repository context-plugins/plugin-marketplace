import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Blocked resource. */
export type BlockedResource = {
  /** URL of the blocked resource. */
  url?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const blockedResourceSchema: Schema<BlockedResource> = s.object<BlockedResource>(
  {
    url: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
