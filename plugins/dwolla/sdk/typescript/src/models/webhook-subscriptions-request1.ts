import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WebhookSubscriptionsRequest1 = {
  paused: boolean;
};

export const webhookSubscriptionsRequest1Schema: Schema<WebhookSubscriptionsRequest1> =
  s.object<WebhookSubscriptionsRequest1>({
    paused: s.boolean(),
  });
