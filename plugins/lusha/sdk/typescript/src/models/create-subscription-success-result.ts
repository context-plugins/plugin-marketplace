import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  subscriptionWithoutSecretInternalSchema,
  subscriptionWithoutSecretSchema,
  type SubscriptionWithoutSecret,
} from "./subscription-without-secret.js";

export type CreateSubscriptionSuccessResult = {
  index: number;
  /** @default "True" */
  success?: "True";
  subscription: SubscriptionWithoutSecret;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createSubscriptionSuccessResultProperties: s.Shape<CreateSubscriptionSuccessResult> = {
  index: s.int(),
  success: s.defaulted(s.literal("True"), "True"),
  subscription: subscriptionWithoutSecretInternalSchema,
};

export const createSubscriptionSuccessResultInternalSchema: Schema<CreateSubscriptionSuccessResult> =
  s.object<CreateSubscriptionSuccessResult>(createSubscriptionSuccessResultProperties, {
    additionalProperties: s.json(),
  });

export const createSubscriptionSuccessResultSchema: Schema<CreateSubscriptionSuccessResult> = s.lazySchema(
  () =>
    s.object<CreateSubscriptionSuccessResult>(
      {
        ...createSubscriptionSuccessResultProperties,
        subscription: subscriptionWithoutSecretSchema,
      },
      { additionalProperties: s.json() },
    ),
);
