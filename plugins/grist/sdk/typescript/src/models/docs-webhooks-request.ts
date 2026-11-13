import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { webhook1InternalSchema, webhook1Schema, type Webhook1 } from "./webhook1.js";

export type DocsWebhooksRequest = {
  webhooks: Webhook1[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const docsWebhooksRequestProperties: s.Shape<DocsWebhooksRequest> = {
  webhooks: s.array(s.lazy(() => webhook1InternalSchema)),
};

export const docsWebhooksRequestInternalSchema: Schema<DocsWebhooksRequest> = s.object<DocsWebhooksRequest>(
  docsWebhooksRequestProperties,
  { additionalProperties: s.json() },
);

export const docsWebhooksRequestSchema: Schema<DocsWebhooksRequest> = s.lazySchema(() =>
  s.object<DocsWebhooksRequest>(
    {
      ...docsWebhooksRequestProperties,
      webhooks: s.array(s.lazy(() => webhook1Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
