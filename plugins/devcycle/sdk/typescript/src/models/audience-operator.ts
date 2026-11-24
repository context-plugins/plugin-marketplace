import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { operatorSchema, type Operator } from "./operator.js";
import { filterInternalSchema, filterSchema, type Filter } from "./unions/filter.js";

export type AudienceOperator = {
  /** Filters to apply using the "operator" operation */
  filters: Filter[];
  /** Operator type if this object represents an operator, and not a filter */
  operator: Operator;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const audienceOperatorProperties: s.Shape<AudienceOperator> = {
  filters: s.array(s.lazy(() => filterInternalSchema)),
  operator: operatorSchema,
};

export const audienceOperatorInternalSchema: Schema<AudienceOperator> = s.object<AudienceOperator>(
  audienceOperatorProperties,
  { additionalProperties: s.json() },
);

export const audienceOperatorSchema: Schema<AudienceOperator> = s.lazySchema(() =>
  s.object<AudienceOperator>(
    {
      ...audienceOperatorProperties,
      filters: s.array(s.lazy(() => filterSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
