import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UpdateWebhookDto = {
  /** The name of the Webhook */
  name?: string;
  /** The description of the Webhook */
  description?: string;
  feature: string;
  environments: string[];
  /** The events that trigger the webhook */
  events?: string[];
  /** The URL to call once the type is triggered */
  url?: string;
  outputFormat?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const updateWebhookDtoProperties: s.Shape<UpdateWebhookDto> = {
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  feature: s.string(),
  environments: s.array(s.string()),
  events: s.optional(s.array(s.string())),
  url: s.optional(s.string()),
  outputFormat: s.optional(s.record(s.string(), s.unknown())),
  _keysMap: {
    feature: "_feature",
    environments: "_environments",
  },
};

export const updateWebhookDtoInternalSchema: Schema<UpdateWebhookDto> = s.object<UpdateWebhookDto>(
  updateWebhookDtoProperties,
  { additionalProperties: s.json() },
);

export const updateWebhookDtoSchema: Schema<UpdateWebhookDto> = s.lazySchema(() =>
  s.object<UpdateWebhookDto>(
    {
      ...updateWebhookDtoProperties,
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(100))),
      description: s.optional(s.string().check(s.maxLength(1000))),
    },
    { additionalProperties: s.json() },
  ),
);
