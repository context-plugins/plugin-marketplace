import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  valueModelContentFormulasItemsDefaultResultTypeSchema,
  type ValueModelContentFormulasItemsDefaultResultType,
} from "./value-model-content-formulas-items-default-result-type.js";

export type ValueModelContentFormulasItemsDefaultResult = {
  type: ValueModelContentFormulasItemsDefaultResultType;
  value?: number;
  expression?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const valueModelContentFormulasItemsDefaultResultSchema: Schema<ValueModelContentFormulasItemsDefaultResult> =
  s.object<ValueModelContentFormulasItemsDefaultResult>(
    {
      type: valueModelContentFormulasItemsDefaultResultTypeSchema,
      value: s.optional(s.float64()),
      expression: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
