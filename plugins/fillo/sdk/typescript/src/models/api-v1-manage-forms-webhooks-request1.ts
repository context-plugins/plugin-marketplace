import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  webhookAuthenticationInputInternalSchema,
  webhookAuthenticationInputSchema,
  type WebhookAuthenticationInput,
} from "./webhook-authentication-input.js";

export type ApiV1ManageFormsWebhooksRequest1 = {
  includeAbandoned?: boolean;
  /**
   * Optional authentication Fillo adds for the receiver. For bearer or x-api-key, secret is
   * required, encrypted at rest, and never returned.
   */
  authentication?: WebhookAuthenticationInput;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1ManageFormsWebhooksRequest1Properties: s.Shape<ApiV1ManageFormsWebhooksRequest1> = {
  includeAbandoned: s.optional(s.boolean()),
  authentication: s.optional(s.lazy(() => webhookAuthenticationInputInternalSchema)),
};

export const apiV1ManageFormsWebhooksRequest1InternalSchema: Schema<ApiV1ManageFormsWebhooksRequest1> =
  s.object<ApiV1ManageFormsWebhooksRequest1>(apiV1ManageFormsWebhooksRequest1Properties, {
    additionalProperties: s.json(),
  });

export const apiV1ManageFormsWebhooksRequest1Schema: Schema<ApiV1ManageFormsWebhooksRequest1> = s.lazySchema(
  () =>
    s.object<ApiV1ManageFormsWebhooksRequest1>(
      {
        ...apiV1ManageFormsWebhooksRequest1Properties,
        authentication: s.optional(s.lazy(() => webhookAuthenticationInputSchema)),
      },
      { additionalProperties: s.json() },
    ),
);
