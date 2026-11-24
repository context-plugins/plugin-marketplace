import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  valueModelContentValueTypesItemsMonetaryConversionConditionsItemsSchema,
  type ValueModelContentValueTypesItemsMonetaryConversionConditionsItems,
} from "./value-model-content-value-types-items-monetary-conversion-conditions-items.js";
import {
  valueModelContentValueTypesItemsMonetaryConversionVariablesItemsSchema,
  type ValueModelContentValueTypesItemsMonetaryConversionVariablesItems,
} from "./value-model-content-value-types-items-monetary-conversion-variables-items.js";

export type ValueModelContentValueTypesItemsMonetaryConversion = {
  expression: string;
  variables?: ValueModelContentValueTypesItemsMonetaryConversionVariablesItems[];
  conditions?: ValueModelContentValueTypesItemsMonetaryConversionConditionsItems[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const valueModelContentValueTypesItemsMonetaryConversionSchema: Schema<ValueModelContentValueTypesItemsMonetaryConversion> =
  s.object<ValueModelContentValueTypesItemsMonetaryConversion>(
    {
      expression: s.string(),
      variables: s.optional(
        s.array(s.lazy(() => valueModelContentValueTypesItemsMonetaryConversionVariablesItemsSchema)),
      ),
      conditions: s.optional(
        s.array(s.lazy(() => valueModelContentValueTypesItemsMonetaryConversionConditionsItemsSchema)),
      ),
    },
    { additionalProperties: s.json() },
  );
