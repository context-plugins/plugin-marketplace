import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ValueModelContentFormulasItemsConditionsItemsOperator = {
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
export type ValueModelContentFormulasItemsConditionsItemsOperator =
  | (typeof ValueModelContentFormulasItemsConditionsItemsOperator)[keyof typeof ValueModelContentFormulasItemsConditionsItemsOperator]
  | (string & {});

export const valueModelContentFormulasItemsConditionsItemsOperatorSchema: EnumSchema<ValueModelContentFormulasItemsConditionsItemsOperator> =
  s.enumOf<ValueModelContentFormulasItemsConditionsItemsOperator>(
    ValueModelContentFormulasItemsConditionsItemsOperator,
  );
