import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CustomerById = {
  /** The Paid customer ID */
  customerId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customerByIdSchema: Schema<CustomerById> = s.object<CustomerById>(
  {
    customerId: s.string(),
  },
  { additionalProperties: s.json() },
);
