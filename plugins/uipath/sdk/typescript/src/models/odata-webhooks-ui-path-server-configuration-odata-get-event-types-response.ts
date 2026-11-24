import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { webhookEventTypeSchema, type WebhookEventType } from "./webhook-event-type.js";

export type OdataWebhooksUiPathServerConfigurationODataGetEventTypesResponse = {
  value?: WebhookEventType[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const odataWebhooksUiPathServerConfigurationODataGetEventTypesResponseSchema: Schema<OdataWebhooksUiPathServerConfigurationODataGetEventTypesResponse> =
  s.object<OdataWebhooksUiPathServerConfigurationODataGetEventTypesResponse>(
    {
      value: s.optional(s.array(s.lazy(() => webhookEventTypeSchema))),
    },
    { additionalProperties: s.json() },
  );
