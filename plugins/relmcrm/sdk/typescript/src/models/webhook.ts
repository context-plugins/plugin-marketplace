import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  objectRelmCrmWebhooksApiSchema,
  type ObjectRelmCrmWebhooksApi,
} from "./object-relm-crm-webhooks-api.js";

export type Webhook = {
  id?: string;
  object?: ObjectRelmCrmWebhooksApi;
  url?: string;
  events?: string[];
  description?: string | null;
  enabled?: boolean;
  /** whsec_...; returned ONLY on create. */
  secret?: string;
  version?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const webhookSchema: Schema<Webhook> = s.object<Webhook>(
  {
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => objectRelmCrmWebhooksApiSchema)),
    url: s.optional(s.string()),
    events: s.optional(s.array(s.string())),
    description: s.optionalNullable(s.string()),
    enabled: s.optional(s.boolean()),
    secret: s.optional(s.string()),
    version: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
