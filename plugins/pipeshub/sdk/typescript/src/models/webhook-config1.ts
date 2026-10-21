import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WebhookConfig1 = {
  webhookUrl?: string;
  events?: string[];
};

export const webhookConfig1Schema: Schema<WebhookConfig1> = s.object<WebhookConfig1>({
  webhookUrl: s.optional(s.string()),
  events: s.optional(s.array(s.string())),
});
