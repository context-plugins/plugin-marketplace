import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { link2InternalSchema, link2Schema, type Link2 } from "./link2.js";

export type Customer1 = {
  /**
   * The unique ID of the customer. You may use either the customer's `id` on CodeQR (obtained via
   * `/customers` endpoint) or their `externalId` (unique ID within your system, prefixed with
   * `ext_`, e.g. `ext_123`).
   */
  id: string;
  /** Unique identifier for the customer in the client's app. */
  externalId: string;
  /** Name of the customer. */
  name: string;
  /** Email of the customer. */
  email?: string | null;
  /** Avatar URL of the customer. */
  avatar?: string | null;
  /** Country of the customer. */
  country?: string | null;
  /** The date the customer was created. */
  createdAt: string;
  link?: Link2 | null;
  /** Custom fields of the customer. */
  customFields?: Record<string, string> | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const customer1Properties: s.Shape<Customer1> = {
  id: s.string(),
  externalId: s.string(),
  name: s.string(),
  email: s.optionalNullable(s.string()),
  avatar: s.optionalNullable(s.string()),
  country: s.optionalNullable(s.string()),
  createdAt: s.string(),
  link: s.optionalNullable(s.lazy(() => link2InternalSchema)),
  customFields: s.optionalNullable(s.record(s.string(), s.string())),
};

export const customer1InternalSchema: Schema<Customer1> = s.object<Customer1>(customer1Properties, {
  additionalProperties: s.json(),
});

export const customer1Schema: Schema<Customer1> = s.lazySchema(() =>
  s.object<Customer1>(
    {
      ...customer1Properties,
      link: s.optionalNullable(s.lazy(() => link2Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
