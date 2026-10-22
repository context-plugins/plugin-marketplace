import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { webhookSubscriptionSchema, type WebhookSubscription } from "./webhook-subscription.js";

export type Embedded96 = {
  webhookSubscriptions?: WebhookSubscription[];
};

export const embedded96Schema: Schema<Embedded96> = s.object<Embedded96>({
  webhookSubscriptions: s.optional(s.array(s.lazy(() => webhookSubscriptionSchema))),
  _keysMap: {
    webhookSubscriptions: "webhook-subscriptions",
  },
});
