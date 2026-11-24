import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dataStandardScopeAttributeFilterDtoSchema,
  type DataStandardScopeAttributeFilterDto,
} from "./data-standard-scope-attribute-filter-dto.js";

export type DataStandardScopeRuleDto = {
  attributesFilter?: DataStandardScopeAttributeFilterDto;
  datasourceId?: string;
  name?: string;
  schema?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataStandardScopeRuleDtoSchema: Schema<DataStandardScopeRuleDto> =
  s.object<DataStandardScopeRuleDto>(
    {
      attributesFilter: s.optional(s.lazy(() => dataStandardScopeAttributeFilterDtoSchema)),
      datasourceId: s.optional(s.string()),
      name: s.optional(s.string()),
      schema: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
