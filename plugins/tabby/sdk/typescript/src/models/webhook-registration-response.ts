import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { header3Schema, type Header3 } from "./header3.js";

export type WebhookRegistrationResponse = {
  header?: Header3 | null;
  /** Unique webhook ID, assigned by Tabby. */
  id?: string;
  /** Indicates whether to use this hook in test environment or not. @default false */
  isTest?: boolean;
  /** HTTPS endpoint for notifications. The URL should be valid and accessible (not local). */
  url: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const webhookRegistrationResponseProperties: s.Shape<WebhookRegistrationResponse> = {
  header: s.optionalNullable(s.lazy(() => header3Schema)),
  id: s.optional(s.string()),
  isTest: s.defaulted(s.boolean(), false),
  url: s.string(),
  _keysMap: {
    isTest: "is_test",
  },
};

export const webhookRegistrationResponseInternalSchema: Schema<WebhookRegistrationResponse> =
  s.object<WebhookRegistrationResponse>(webhookRegistrationResponseProperties, {
    additionalProperties: s.json(),
  });

export const webhookRegistrationResponseSchema: Schema<WebhookRegistrationResponse> = s.lazySchema(() =>
  s.object<WebhookRegistrationResponse>(
    {
      ...webhookRegistrationResponseProperties,
      url: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
