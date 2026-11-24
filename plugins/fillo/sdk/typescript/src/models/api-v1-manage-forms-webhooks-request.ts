import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  webhookAuthenticationInputInternalSchema,
  webhookAuthenticationInputSchema,
  type WebhookAuthenticationInput,
} from "./webhook-authentication-input.js";

export type ApiV1ManageFormsWebhooksRequest = {
  /** An http(s) delivery URL. */
  url: string;
  /** Also deliver draft.abandoned events. @default false */
  includeAbandoned?: boolean;
  /**
   * Optional authentication Fillo adds for the receiver. For bearer or x-api-key, secret is
   * required, encrypted at rest, and never returned.
   */
  authentication?: WebhookAuthenticationInput;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1ManageFormsWebhooksRequestProperties: s.Shape<ApiV1ManageFormsWebhooksRequest> = {
  url: s.string(),
  includeAbandoned: s.defaulted(s.boolean(), false),
  authentication: s.optional(s.lazy(() => webhookAuthenticationInputInternalSchema)),
};

export const apiV1ManageFormsWebhooksRequestInternalSchema: Schema<ApiV1ManageFormsWebhooksRequest> =
  s.object<ApiV1ManageFormsWebhooksRequest>(apiV1ManageFormsWebhooksRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1ManageFormsWebhooksRequestSchema: Schema<ApiV1ManageFormsWebhooksRequest> = s.lazySchema(
  () =>
    s.object<ApiV1ManageFormsWebhooksRequest>(
      {
        ...apiV1ManageFormsWebhooksRequestProperties,
        url: s.string().check(s.url()),
        authentication: s.optional(s.lazy(() => webhookAuthenticationInputSchema)),
      },
      { additionalProperties: s.json() },
    ),
);
