import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { comparisonOperatorSchema, type ComparisonOperator } from "./comparison-operator.js";

export type DnsNameFilter = {
  /** The DNS name value to match against. */
  value: string;
  /** The comparison operator to use. */
  comparisonOperator: ComparisonOperator;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dnsNameFilterSchema: Schema<DnsNameFilter> = s.object<DnsNameFilter>(
  {
    value: s.string(),
    comparisonOperator: comparisonOperatorSchema,
    _keysMap: {
      value: "Value",
      comparisonOperator: "ComparisonOperator",
    },
  },
  { additionalProperties: s.json() },
);
