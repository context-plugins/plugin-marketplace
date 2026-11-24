import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UpdateInvoiceRequest = {
  metadata?: Record<string, unknown> | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateInvoiceRequestSchema: Schema<UpdateInvoiceRequest> = s.object<UpdateInvoiceRequest>(
  {
    metadata: s.optionalNullable(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
