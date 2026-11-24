import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { headerSchema, type Header } from "./header.js";

export type Webhook = {
  header?: Header | null;
  /** Unique webhook ID, assigned by Tabby. */
  id: string;
  /** Indicates whether to use this hook in test environment or not. @default true */
  isTest?: boolean;
  /** HTTPS endpoint for notifications. The URL should be valid and accessible (not local). */
  url: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const webhookProperties: s.Shape<Webhook> = {
  header: s.optionalNullable(s.lazy(() => headerSchema)),
  id: s.string(),
  isTest: s.defaulted(s.boolean(), true),
  url: s.string(),
  _keysMap: {
    isTest: "is_test",
  },
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
