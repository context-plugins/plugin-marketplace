import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CustomersCheckEntitlementResponse200 = {
  /** Whether the customer is entitled to the specified event */
  entitled: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customersCheckEntitlementResponse200Schema: Schema<CustomersCheckEntitlementResponse200> =
  s.object<CustomersCheckEntitlementResponse200>(
    {
      entitled: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
