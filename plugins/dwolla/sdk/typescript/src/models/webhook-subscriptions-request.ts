import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WebhookSubscriptionsRequest = {
  url: string;
  secret: string;
};

export const webhookSubscriptionsRequestSchema: Schema<WebhookSubscriptionsRequest> =
  s.object<WebhookSubscriptionsRequest>({
    url: s.string(),
    secret: s.string(),
  });
