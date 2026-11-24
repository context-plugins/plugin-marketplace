import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { webhookInternalSchema, webhookSchema, type Webhook } from "./webhook.js";

export type ApiV1ManageFormsWebhooksResponse = {
  webhooks: Webhook[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1ManageFormsWebhooksResponseProperties: s.Shape<ApiV1ManageFormsWebhooksResponse> = {
  webhooks: s.array(s.lazy(() => webhookInternalSchema)),
};

export const apiV1ManageFormsWebhooksResponseInternalSchema: Schema<ApiV1ManageFormsWebhooksResponse> =
  s.object<ApiV1ManageFormsWebhooksResponse>(apiV1ManageFormsWebhooksResponseProperties, {
    additionalProperties: s.json(),
  });

export const apiV1ManageFormsWebhooksResponseSchema: Schema<ApiV1ManageFormsWebhooksResponse> = s.lazySchema(
  () =>
    s.object<ApiV1ManageFormsWebhooksResponse>(
      {
        ...apiV1ManageFormsWebhooksResponseProperties,
        webhooks: s.array(s.lazy(() => webhookSchema)),
      },
      { additionalProperties: s.json() },
    ),
);
