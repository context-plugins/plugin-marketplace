import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DataStandardScopeAttributeFilterTypeDto = {
  Equals: "equals",
  Contains: "contains",
  And: "and",
  Or: "or",
} as const;
export type DataStandardScopeAttributeFilterTypeDto =
  | (typeof DataStandardScopeAttributeFilterTypeDto)[keyof typeof DataStandardScopeAttributeFilterTypeDto]
  | (string & {});

export const dataStandardScopeAttributeFilterTypeDtoSchema: EnumSchema<DataStandardScopeAttributeFilterTypeDto> =
  s.enumOf<DataStandardScopeAttributeFilterTypeDto>(DataStandardScopeAttributeFilterTypeDto);
