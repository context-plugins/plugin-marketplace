import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { optionsSchema, type Options } from "./options.js";

/** The specification defining what changes the webhook monitors. */
export type WebhookSpecification = {
  options?: Options;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const webhookSpecificationSchema: Schema<WebhookSpecification> = s.object<WebhookSpecification>(
  {
    options: s.optional(s.lazy(() => optionsSchema)),
  },
  { additionalProperties: s.json() },
);
