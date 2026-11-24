import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  valueModelContentFormulasItemsConditionsItemsResultTypeSchema,
  type ValueModelContentFormulasItemsConditionsItemsResultType,
} from "./value-model-content-formulas-items-conditions-items-result-type.js";

export type ValueModelContentFormulasItemsConditionsItemsResult = {
  type: ValueModelContentFormulasItemsConditionsItemsResultType;
  value?: number;
  expression?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const valueModelContentFormulasItemsConditionsItemsResultSchema: Schema<ValueModelContentFormulasItemsConditionsItemsResult> =
  s.object<ValueModelContentFormulasItemsConditionsItemsResult>(
    {
      type: valueModelContentFormulasItemsConditionsItemsResultTypeSchema,
      value: s.optional(s.float64()),
      expression: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
