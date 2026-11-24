import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { status2Schema, type Status2 } from "./status2.js";
import { Type, typeSchema } from "./type.js";
import { Version, versionSchema } from "./version.js";

/** Contains the information to create/update a specific webhook */
export type WebhookRequestModel = {
  /** URL that will receive the webhook call */
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

const webhookRequestModelProperties: s.Shape<WebhookRequestModel> = {
  serverUrl: s.string(),
  status: status2Schema,
  version: s.defaulted(versionSchema, Version.V10),
  type: s.defaulted(typeSchema, Type.All),
};

export const webhookRequestModelInternalSchema: Schema<WebhookRequestModel> = s.object<WebhookRequestModel>(
  webhookRequestModelProperties,
  { additionalProperties: s.json() },
);

export const webhookRequestModelSchema: Schema<WebhookRequestModel> = s.lazySchema(() =>
  s.object<WebhookRequestModel>(
    {
      ...webhookRequestModelProperties,
      serverUrl: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
