import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { status2Schema, type Status2 } from "./status2.js";

/** Contains the information about a specific webhook */
export type WebhookCreateResponse = {
  /** The unique ID of the webhook */
  externalId: string;
  /** The unique ID of the webhook */
  token: string;
  /** The URL that will receive the webhook calls */
  serverUrl: string;
  /** The status of the webhook */
  status: Status2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const webhookCreateResponseProperties: s.Shape<WebhookCreateResponse> = {
  externalId: s.string(),
  token: s.string(),
  serverUrl: s.string(),
  status: status2Schema,
};

export const webhookCreateResponseInternalSchema: Schema<WebhookCreateResponse> =
  s.object<WebhookCreateResponse>(webhookCreateResponseProperties, { additionalProperties: s.json() });

export const webhookCreateResponseSchema: Schema<WebhookCreateResponse> = s.lazySchema(() =>
  s.object<WebhookCreateResponse>(
    {
      ...webhookCreateResponseProperties,
      serverUrl: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
