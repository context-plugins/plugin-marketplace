import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WebhookConfig = {
  supported?: boolean;
  webhookUrl?: string;
  events?: string[];
  verificationToken?: string;
  secretKey?: string;
};

export const webhookConfigSchema: Schema<WebhookConfig> = s.object<WebhookConfig>({
  supported: s.optional(s.boolean()),
  webhookUrl: s.optional(s.string()),
  events: s.optional(s.array(s.string())),
  verificationToken: s.optional(s.string()),
  secretKey: s.optional(s.string()),
});
