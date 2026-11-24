import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The subscription details, or null if the customer has no active plan */
export type PlansCurrentGetResponsesContentApplicationJsonSchemaSubscription = {
  /** The ID of the order */
  orderId: string;
  /** The display ID of the order */
  orderDisplayId?: string | null;
  /** The start date of the subscription */
  startDate: Date;
  /** The end date of the subscription (null if ongoing) */
  endDate: Date | null;
  /** The total usage quantity across all features on this order */
  totalUsage: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const plansCurrentGetResponsesContentApplicationJsonSchemaSubscriptionSchema: Schema<PlansCurrentGetResponsesContentApplicationJsonSchemaSubscription> =
  s.object<PlansCurrentGetResponsesContentApplicationJsonSchemaSubscription>(
    {
      orderId: s.string(),
      orderDisplayId: s.optionalNullable(s.string()),
      startDate: s.dateTime(),
      endDate: s.nullable(s.dateTime()),
      totalUsage: s.int(),
    },
    { additionalProperties: s.json() },
  );
