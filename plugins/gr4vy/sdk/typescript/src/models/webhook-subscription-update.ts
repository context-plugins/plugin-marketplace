import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { active3Schema, type Active3 } from "./unions/active3.js";
import { authentication1Schema, type Authentication1 } from "./unions/authentication1.js";
import { url2Schema, type Url2 } from "./unions/url2.js";

export type WebhookSubscriptionUpdate = {
  /** Flag to determine whether this subscription should be sent webhook payloads. */
  active?: Active3;
  /** URL to send webhook payloads. */
  url?: Url2;
  /** Optional authentication configuration for webhook requests. */
  authentication?: Authentication1;
};

export const webhookSubscriptionUpdateSchema: Schema<WebhookSubscriptionUpdate> =
  s.object<WebhookSubscriptionUpdate>({
    active: s.optional(s.lazy(() => active3Schema)),
    url: s.optional(s.lazy(() => url2Schema)),
    authentication: s.optional(s.lazy(() => authentication1Schema)),
  });
