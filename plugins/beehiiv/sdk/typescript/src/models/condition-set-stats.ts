import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ConditionSetStats = {
  /**
   * Count of active subscribers matching this condition set, calculated synchronously at request
   * time.
   */
  activeSubscriberCount: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const conditionSetStatsSchema: Schema<ConditionSetStats> = s.object<ConditionSetStats>(
  {
    activeSubscriberCount: s.int(),
    _keysMap: {
      activeSubscriberCount: "active_subscriber_count",
    },
  },
  { additionalProperties: s.json() },
);
