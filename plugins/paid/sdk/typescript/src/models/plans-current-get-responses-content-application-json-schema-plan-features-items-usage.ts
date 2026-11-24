import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Current usage and limits for this feature */
export type PlansCurrentGetResponsesContentApplicationJsonSchemaPlanFeaturesItemsUsage = {
  /** The event name used to track usage for this feature */
  eventName: string | null;
  /** The current usage quantity for this feature on the order */
  currentUsage: number;
  /** The usage limit for this feature (null if unlimited) */
  limit: number | null;
  /** Whether this feature has unlimited usage */
  isUnlimited: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const plansCurrentGetResponsesContentApplicationJsonSchemaPlanFeaturesItemsUsageSchema: Schema<PlansCurrentGetResponsesContentApplicationJsonSchemaPlanFeaturesItemsUsage> =
  s.object<PlansCurrentGetResponsesContentApplicationJsonSchemaPlanFeaturesItemsUsage>(
    {
      eventName: s.nullable(s.string()),
      currentUsage: s.int(),
      limit: s.nullable(s.int()),
      isUnlimited: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
