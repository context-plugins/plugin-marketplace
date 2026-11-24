import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { subscriptionSchema, type Subscription } from "./subscription.js";

export type DeleteSubscriptionSuccessResult = {
  index: number;
  /** @default "True" */
  success?: "True";
  subscription: Subscription;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteSubscriptionSuccessResultSchema: Schema<DeleteSubscriptionSuccessResult> =
  s.object<DeleteSubscriptionSuccessResult>(
    {
      index: s.int(),
      success: s.defaulted(s.literal("True"), "True"),
      subscription: subscriptionSchema,
    },
    { additionalProperties: s.json() },
  );
