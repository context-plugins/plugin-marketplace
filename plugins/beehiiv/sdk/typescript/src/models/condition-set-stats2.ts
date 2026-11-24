import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Subscriber count statistics for the condition set. Included when `expand[]=stats` is specified in
 * the request.
 */
export type ConditionSetStats2 = {
  /**
   * Count of active subscribers matching this condition set, calculated synchronously at request
   * time.
   */
  activeSubscriberCount: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const conditionSetStats2Schema: Schema<ConditionSetStats2> = s.object<ConditionSetStats2>(
  {
    activeSubscriberCount: s.int(),
    _keysMap: {
      activeSubscriberCount: "active_subscriber_count",
    },
  },
  { additionalProperties: s.json() },
);
