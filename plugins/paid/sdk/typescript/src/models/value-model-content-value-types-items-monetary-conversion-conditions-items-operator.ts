import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ValueModelContentValueTypesItemsMonetaryConversionConditionsItemsOperator = {
  Gte: "gte",
  Gt: "gt",
  Lt: "lt",
  Lte: "lte",
  Eq: "eq",
  Neq: "neq",
  Contains: "contains",
  EqString: "eq_string",
  EqBool: "eq_bool",
} as const;
export type ValueModelContentValueTypesItemsMonetaryConversionConditionsItemsOperator =
  | (typeof ValueModelContentValueTypesItemsMonetaryConversionConditionsItemsOperator)[keyof typeof ValueModelContentValueTypesItemsMonetaryConversionConditionsItemsOperator]
  | (string & {});

export const valueModelContentValueTypesItemsMonetaryConversionConditionsItemsOperatorSchema: EnumSchema<ValueModelContentValueTypesItemsMonetaryConversionConditionsItemsOperator> =
  s.enumOf<ValueModelContentValueTypesItemsMonetaryConversionConditionsItemsOperator>(
    ValueModelContentValueTypesItemsMonetaryConversionConditionsItemsOperator,
  );
