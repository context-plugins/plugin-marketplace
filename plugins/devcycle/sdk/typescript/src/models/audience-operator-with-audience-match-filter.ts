import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { operatorSchema, type Operator } from "./operator.js";
import {
  filterDevCycleManagementDeprecatedFeaturesV1ApiInternalSchema,
  filterDevCycleManagementDeprecatedFeaturesV1ApiSchema,
  type FilterDevCycleManagementDeprecatedFeaturesV1Api,
} from "./unions/filter-dev-cycle-management-deprecated-features-v1-api.js";

export type AudienceOperatorWithAudienceMatchFilter = {
  /** Filters to apply using the "operator" operation */
  filters: FilterDevCycleManagementDeprecatedFeaturesV1Api[];
  /** Operator type if this object represents an operator, and not a filter */
  operator: Operator;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const audienceOperatorWithAudienceMatchFilterProperties: s.Shape<AudienceOperatorWithAudienceMatchFilter> = {
  filters: s.array(s.lazy(() => filterDevCycleManagementDeprecatedFeaturesV1ApiInternalSchema)),
  operator: operatorSchema,
};

export const audienceOperatorWithAudienceMatchFilterInternalSchema: Schema<AudienceOperatorWithAudienceMatchFilter> =
  s.object<AudienceOperatorWithAudienceMatchFilter>(audienceOperatorWithAudienceMatchFilterProperties, {
    additionalProperties: s.json(),
  });

export const audienceOperatorWithAudienceMatchFilterSchema: Schema<AudienceOperatorWithAudienceMatchFilter> =
  s.lazySchema(() =>
    s.object<AudienceOperatorWithAudienceMatchFilter>(
      {
        ...audienceOperatorWithAudienceMatchFilterProperties,
        filters: s.array(s.lazy(() => filterDevCycleManagementDeprecatedFeaturesV1ApiSchema)),
      },
      { additionalProperties: s.json() },
    ),
  );
