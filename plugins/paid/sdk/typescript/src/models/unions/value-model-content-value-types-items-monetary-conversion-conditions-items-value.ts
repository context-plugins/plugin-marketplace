import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ValueModelContentValueTypesItemsMonetaryConversionConditionsItemsValue =
  | number
  | string
  | boolean;

export const valueModelContentValueTypesItemsMonetaryConversionConditionsItemsValueSchema: Schema<ValueModelContentValueTypesItemsMonetaryConversionConditionsItemsValue> =
  s.of<ValueModelContentValueTypesItemsMonetaryConversionConditionsItemsValue>(
    s.union([s.float64(), s.string(), s.boolean()]),
  );
