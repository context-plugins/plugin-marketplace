import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GroupConsumableFeatureUsage = {
  name?: string;
  description?: string;
  count?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const groupConsumableFeatureUsageSchema: Schema<GroupConsumableFeatureUsage> =
  s.object<GroupConsumableFeatureUsage>(
    {
      name: s.optional(s.string()),
      description: s.optional(s.string()),
      count: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
