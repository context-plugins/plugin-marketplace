import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  valueModelContentFormulasItemsConditionsItemsValueSchema,
  type ValueModelContentFormulasItemsConditionsItemsValue,
} from "./unions/value-model-content-formulas-items-conditions-items-value.js";
import {
  valueModelContentFormulasItemsConditionsItemsOperatorSchema,
  type ValueModelContentFormulasItemsConditionsItemsOperator,
} from "./value-model-content-formulas-items-conditions-items-operator.js";
import {
  valueModelContentFormulasItemsConditionsItemsResultSchema,
  type ValueModelContentFormulasItemsConditionsItemsResult,
} from "./value-model-content-formulas-items-conditions-items-result.js";

export type ValueModelContentFormulasItemsConditionsItems = {
  field: string;
  operator: ValueModelContentFormulasItemsConditionsItemsOperator;
  value: ValueModelContentFormulasItemsConditionsItemsValue;
  result: ValueModelContentFormulasItemsConditionsItemsResult;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const valueModelContentFormulasItemsConditionsItemsSchema: Schema<ValueModelContentFormulasItemsConditionsItems> =
  s.object<ValueModelContentFormulasItemsConditionsItems>(
    {
      field: s.string(),
      operator: valueModelContentFormulasItemsConditionsItemsOperatorSchema,
      value: valueModelContentFormulasItemsConditionsItemsValueSchema,
      result: valueModelContentFormulasItemsConditionsItemsResultSchema,
    },
    { additionalProperties: s.json() },
  );
