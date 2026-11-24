import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { status2Schema, type Status2 } from "./status2.js";
import { Type, typeSchema } from "./type.js";
import { Version, versionSchema } from "./version.js";

/** Contains the information about a specific webhook */
export type WebhookResponse = {
  /** The unique ID of the webhook */
  externalId: string;
  /** The URL that will receive the webhook calls */
  serverUrl: string;
  /** The status of the webhook */
  status: Status2;
  /** The version of the webhook @default Version.V10 */
  version?: Version;
  /** The type of the webhook @default Type.All */
  type?: Type;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const webhookResponseProperties: s.Shape<WebhookResponse> = {
  externalId: s.string(),
  serverUrl: s.string(),
  status: status2Schema,
  version: s.defaulted(versionSchema, Version.V10),
  type: s.defaulted(typeSchema, Type.All),
};

export const webhookResponseInternalSchema: Schema<WebhookResponse> = s.object<WebhookResponse>(
  webhookResponseProperties,
  { additionalProperties: s.json() },
);

export const webhookResponseSchema: Schema<WebhookResponse> = s.lazySchema(() =>
  s.object<WebhookResponse>(
    {
      ...webhookResponseProperties,
      serverUrl: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
