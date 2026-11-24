import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  valueModelContentValueTypesItemsMonetaryConversionConditionsItemsResultTypeSchema,
  type ValueModelContentValueTypesItemsMonetaryConversionConditionsItemsResultType,
} from "./value-model-content-value-types-items-monetary-conversion-conditions-items-result-type.js";

export type ValueModelContentValueTypesItemsMonetaryConversionConditionsItemsResult = {
  type: ValueModelContentValueTypesItemsMonetaryConversionConditionsItemsResultType;
  value?: number;
  expression?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const valueModelContentValueTypesItemsMonetaryConversionConditionsItemsResultSchema: Schema<ValueModelContentValueTypesItemsMonetaryConversionConditionsItemsResult> =
  s.object<ValueModelContentValueTypesItemsMonetaryConversionConditionsItemsResult>(
    {
      type: valueModelContentValueTypesItemsMonetaryConversionConditionsItemsResultTypeSchema,
      value: s.optional(s.float64()),
      expression: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
