import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { authentication1Schema, type Authentication1 } from "./authentication1.js";

export type Webhook = {
  id: string;
  url: string;
  /** Delivered event types, e.g. response.created and optionally draft.abandoned. */
  events: string[];
  /** Configured receiver-authentication mode. The credential is never returned. */
  authentication: Authentication1;
  createdAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const webhookProperties: s.Shape<Webhook> = {
  id: s.string(),
  url: s.string(),
  events: s.array(s.string()),
  authentication: authentication1Schema,
  createdAt: s.dateTime(),
};

export const webhookInternalSchema: Schema<Webhook> = s.object<Webhook>(webhookProperties, {
  additionalProperties: s.json(),
});

export const webhookSchema: Schema<Webhook> = s.lazySchema(() =>
  s.object<Webhook>(
    {
      ...webhookProperties,
      url: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
