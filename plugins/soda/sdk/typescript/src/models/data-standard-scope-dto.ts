import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dataStandardScopeRuleDtoSchema,
  type DataStandardScopeRuleDto,
} from "./data-standard-scope-rule-dto.js";

export type DataStandardScopeDto = {
  rules?: DataStandardScopeRuleDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataStandardScopeDtoSchema: Schema<DataStandardScopeDto> = s.object<DataStandardScopeDto>(
  {
    rules: s.optional(s.array(s.lazy(() => dataStandardScopeRuleDtoSchema))),
  },
  { additionalProperties: s.json() },
);
