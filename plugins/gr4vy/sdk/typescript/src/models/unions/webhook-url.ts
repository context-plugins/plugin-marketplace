import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The URL that needs to be configured with this payment service as the receiving endpoint for
 * webhooks from the service to our system. Currently, we dp not yet automatically register webhooks
 * on setup, and therefore webhooks need to be registered manually by the merchant.
 */
export type WebhookUrl = string;

export const webhookUrlSchema: Schema<WebhookUrl> = s.of<WebhookUrl>(s.union([s.string()]));
