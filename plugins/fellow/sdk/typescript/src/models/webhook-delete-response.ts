import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Response for webhook deletion. */
export type WebhookDeleteResponse = {
  webhookId: string;
  deleted: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const webhookDeleteResponseSchema: Schema<WebhookDeleteResponse> = s.object<WebhookDeleteResponse>(
  {
    webhookId: s.string(),
    deleted: s.boolean(),
    _keysMap: {
      webhookId: "webhook_id",
    },
  },
  { additionalProperties: s.json() },
);
