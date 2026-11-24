import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { webhookInternalSchema, webhookSchema, type Webhook } from "./webhook.js";

/** OData collection response containing webhooks */
export type ODataWebhookCollection = {
  value?: Webhook[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const oDataWebhookCollectionProperties: s.Shape<ODataWebhookCollection> = {
  value: s.optional(s.array(s.lazy(() => webhookInternalSchema))),
};

export const oDataWebhookCollectionInternalSchema: Schema<ODataWebhookCollection> =
  s.object<ODataWebhookCollection>(oDataWebhookCollectionProperties, { additionalProperties: s.json() });

export const oDataWebhookCollectionSchema: Schema<ODataWebhookCollection> = s.lazySchema(() =>
  s.object<ODataWebhookCollection>(
    {
      ...oDataWebhookCollectionProperties,
      value: s.optional(s.array(s.lazy(() => webhookSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
