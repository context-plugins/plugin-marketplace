import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CustomerGroupSummary = {
  id: string;
  name: string;
  description: string | null;
  customerCount: number;
  createdAt: Date;
  updatedAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customerGroupSummarySchema: Schema<CustomerGroupSummary> = s.object<CustomerGroupSummary>(
  {
    id: s.string(),
    name: s.string(),
    description: s.nullable(s.string()),
    customerCount: s.int(),
    createdAt: s.dateTime(),
    updatedAt: s.dateTime(),
  },
  { additionalProperties: s.json() },
);
