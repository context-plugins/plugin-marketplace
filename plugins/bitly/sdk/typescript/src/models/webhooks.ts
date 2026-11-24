import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { webhookSchema, type Webhook } from "./webhook.js";

export type Webhooks = {
  webhooks?: Webhook[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const webhooksSchema: Schema<Webhooks> = s.object<Webhooks>(
  {
    webhooks: s.optional(s.array(s.lazy(() => webhookSchema))),
  },
  { additionalProperties: s.json() },
);
