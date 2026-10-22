import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WebhookUrl = {
  /** URL of a webhook endpoint to send events to, such as http://localhost:10200 */
  url: string;
  /** Assign a weight (>0) to each endpoint to indicate its traffic-handling capability */
  weight?: number;
  /**
   * Binds 'url' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'url' at runtime.
   */
  templateUrl?: string;
};

export const webhookUrlSchema: Schema<WebhookUrl> = s.object<WebhookUrl>({
  url: s.string(),
  weight: s.optional(s.float64()),
  templateUrl: s.optional(s.string()),
  _keysMap: {
    templateUrl: "__template_url",
  },
});
