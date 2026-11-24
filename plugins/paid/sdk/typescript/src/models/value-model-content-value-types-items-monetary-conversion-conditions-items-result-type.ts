import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ValueModelContentValueTypesItemsMonetaryConversionConditionsItemsResultType = {
  Constant: "constant",
  Expression: "expression",
} as const;
export type ValueModelContentValueTypesItemsMonetaryConversionConditionsItemsResultType =
  | (typeof ValueModelContentValueTypesItemsMonetaryConversionConditionsItemsResultType)[keyof typeof ValueModelContentValueTypesItemsMonetaryConversionConditionsItemsResultType]
  | (string & {});

export const valueModelContentValueTypesItemsMonetaryConversionConditionsItemsResultTypeSchema: EnumSchema<ValueModelContentValueTypesItemsMonetaryConversionConditionsItemsResultType> =
  s.enumOf<ValueModelContentValueTypesItemsMonetaryConversionConditionsItemsResultType>(
    ValueModelContentValueTypesItemsMonetaryConversionConditionsItemsResultType,
  );
