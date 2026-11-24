import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dataStandardScopeAttributeFilterTypeDtoSchema,
  type DataStandardScopeAttributeFilterTypeDto,
} from "./data-standard-scope-attribute-filter-type-dto.js";

export type DataStandardScopeAttributeFilterDto = {
  attributeName?: string;
  booleanValue?: boolean;
  date?: Date;
  filters?: DataStandardScopeAttributeFilterDto[];
  type: DataStandardScopeAttributeFilterTypeDto;
  value?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataStandardScopeAttributeFilterDtoSchema: Schema<DataStandardScopeAttributeFilterDto> =
  s.object<DataStandardScopeAttributeFilterDto>(
    {
      attributeName: s.optional(s.string()),
      booleanValue: s.optional(s.boolean()),
      date: s.optional(s.dateTime()),
      filters: s.optional(s.array(s.lazy(() => dataStandardScopeAttributeFilterDtoSchema))),
      type: dataStandardScopeAttributeFilterTypeDtoSchema,
      value: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
