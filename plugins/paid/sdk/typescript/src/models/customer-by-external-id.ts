import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CustomerByExternalId = {
  /** Your external customer ID */
  externalCustomerId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customerByExternalIdSchema: Schema<CustomerByExternalId> = s.object<CustomerByExternalId>(
  {
    externalCustomerId: s.string(),
  },
  { additionalProperties: s.json() },
);
