import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type OrderTabbyApiReferencePaymentsApi = {
  /** Merchant-assigned order or cart ID. */
  referenceId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const orderTabbyApiReferencePaymentsApiSchema: Schema<OrderTabbyApiReferencePaymentsApi> =
  s.object<OrderTabbyApiReferencePaymentsApi>(
    {
      referenceId: s.optional(s.string()),
      _keysMap: {
        referenceId: "reference_id",
      },
    },
    { additionalProperties: s.json() },
  );
