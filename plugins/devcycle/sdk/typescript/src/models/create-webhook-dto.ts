import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateWebhookDto = {
  /** The name of the Webhook */
  name: string;
  /** The description of the Webhook */
  description?: string;
  outputFormat?: Record<string, unknown>;
  feature?: string;
  environments?: string[];
  /** The events that trigger the webhook */
  events: string[];
  /** The URL to call once the type is triggered */
  url: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createWebhookDtoProperties: s.Shape<CreateWebhookDto> = {
  name: s.string(),
  description: s.optional(s.string()),
  outputFormat: s.optional(s.record(s.string(), s.unknown())),
  feature: s.optional(s.string()),
  environments: s.optional(s.array(s.string())),
  events: s.array(s.string()),
  url: s.string(),
  _keysMap: {
    feature: "_feature",
    environments: "_environments",
  },
};

export const createWebhookDtoInternalSchema: Schema<CreateWebhookDto> = s.object<CreateWebhookDto>(
  createWebhookDtoProperties,
  { additionalProperties: s.json() },
);

export const createWebhookDtoSchema: Schema<CreateWebhookDto> = s.lazySchema(() =>
  s.object<CreateWebhookDto>(
    {
      ...createWebhookDtoProperties,
      name: s.string().check(s.minLength(1), s.maxLength(100)),
      description: s.optional(s.string().check(s.maxLength(1000))),
    },
    { additionalProperties: s.json() },
  ),
);
