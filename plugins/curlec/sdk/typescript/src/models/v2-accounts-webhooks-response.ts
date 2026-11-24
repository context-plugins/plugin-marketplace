import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { partnerWebhookSchema, type PartnerWebhook } from "./partner-webhook.js";

export type V2AccountsWebhooksResponse = {
  entity?: string;
  count?: number;
  items?: PartnerWebhook[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v2AccountsWebhooksResponseSchema: Schema<V2AccountsWebhooksResponse> =
  s.object<V2AccountsWebhooksResponse>(
    {
      entity: s.optional(s.string()),
      count: s.optional(s.int()),
      items: s.optional(s.array(s.lazy(() => partnerWebhookSchema))),
    },
    { additionalProperties: s.json() },
  );
