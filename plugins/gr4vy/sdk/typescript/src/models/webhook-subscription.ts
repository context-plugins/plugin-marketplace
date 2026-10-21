import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type79, type79Schema } from "./type79.js";
import { authenticationSchema, type Authentication } from "./unions/authentication.js";
import { creator11Schema, type Creator11 } from "./unions/creator11.js";
import { merchantAccountId2Schema, type MerchantAccountId2 } from "./unions/merchant-account-id2.js";
import { secretSchema, type Secret } from "./unions/secret.js";

export type WebhookSubscription = {
  /** The ID of the webhook subscription */
  id: string;
  /** Type of resource for webhook subscriptions. @default Type79.WebhookSubscription */
  type?: Type79;
  /**
   * The merchant account to which this subscription is associated. When null this represents an
   * instance level webhook.
   */
  merchantAccountId?: MerchantAccountId2;
  /** Flag to determine whether this subscription should be sent webhook payloads. */
  active: boolean;
  /** URL to send webhook payloads. */
  url: string;
  /** Optional authentication configuration for webhook requests. */
  authentication?: Authentication;
  /** The active secret value. */
  secret?: Secret;
  /** Flag to determine whether the subscription has a secret rotation in progress or not. */
  rotating: boolean;
  /** The user that created this resource */
  creator?: Creator11;
};

export const webhookSubscriptionSchema: Schema<WebhookSubscription> = s.object<WebhookSubscription>({
  id: s.string(),
  type: s.defaulted(type79Schema, Type79.WebhookSubscription),
  merchantAccountId: s.optional(s.lazy(() => merchantAccountId2Schema)),
  active: s.boolean(),
  url: s.string(),
  authentication: s.optional(s.lazy(() => authenticationSchema)),
  secret: s.optional(s.lazy(() => secretSchema)),
  rotating: s.boolean(),
  creator: s.optional(s.lazy(() => creator11Schema)),
  _keysMap: {
    merchantAccountId: "merchant_account_id",
  },
});
