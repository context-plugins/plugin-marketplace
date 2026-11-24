import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  valueModelContentValueTypesItemsMonetaryConversionConditionsItemsValueSchema,
  type ValueModelContentValueTypesItemsMonetaryConversionConditionsItemsValue,
} from "./unions/value-model-content-value-types-items-monetary-conversion-conditions-items-value.js";
import {
  valueModelContentValueTypesItemsMonetaryConversionConditionsItemsOperatorSchema,
  type ValueModelContentValueTypesItemsMonetaryConversionConditionsItemsOperator,
} from "./value-model-content-value-types-items-monetary-conversion-conditions-items-operator.js";
import {
  valueModelContentValueTypesItemsMonetaryConversionConditionsItemsResultSchema,
  type ValueModelContentValueTypesItemsMonetaryConversionConditionsItemsResult,
} from "./value-model-content-value-types-items-monetary-conversion-conditions-items-result.js";

export type ValueModelContentValueTypesItemsMonetaryConversionConditionsItems = {
  field: string;
  operator: ValueModelContentValueTypesItemsMonetaryConversionConditionsItemsOperator;
  value: ValueModelContentValueTypesItemsMonetaryConversionConditionsItemsValue;
  result: ValueModelContentValueTypesItemsMonetaryConversionConditionsItemsResult;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const valueModelContentValueTypesItemsMonetaryConversionConditionsItemsSchema: Schema<ValueModelContentValueTypesItemsMonetaryConversionConditionsItems> =
  s.object<ValueModelContentValueTypesItemsMonetaryConversionConditionsItems>(
    {
      field: s.string(),
      operator: valueModelContentValueTypesItemsMonetaryConversionConditionsItemsOperatorSchema,
      value: valueModelContentValueTypesItemsMonetaryConversionConditionsItemsValueSchema,
      result: valueModelContentValueTypesItemsMonetaryConversionConditionsItemsResultSchema,
    },
    { additionalProperties: s.json() },
  );
