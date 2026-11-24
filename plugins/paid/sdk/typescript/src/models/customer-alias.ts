import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CustomerAlias = {
  /** Alternate external identifier that resolves to the customer. */
  alias: string;
  /** Paid customer display ID this alias resolves to. */
  customerId: string;
  name: string | null;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customerAliasSchema: Schema<CustomerAlias> = s.object<CustomerAlias>(
  {
    alias: s.string(),
    customerId: s.string(),
    name: s.nullable(s.string()),
    description: s.nullable(s.string()),
    createdAt: s.dateTime(),
    updatedAt: s.dateTime(),
  },
  { additionalProperties: s.json() },
);
