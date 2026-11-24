import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ValueModelContentFormulasItemsConditionsItemsResultType = {
  Constant: "constant",
  Expression: "expression",
} as const;
export type ValueModelContentFormulasItemsConditionsItemsResultType =
  | (typeof ValueModelContentFormulasItemsConditionsItemsResultType)[keyof typeof ValueModelContentFormulasItemsConditionsItemsResultType]
  | (string & {});

export const valueModelContentFormulasItemsConditionsItemsResultTypeSchema: EnumSchema<ValueModelContentFormulasItemsConditionsItemsResultType> =
  s.enumOf<ValueModelContentFormulasItemsConditionsItemsResultType>(
    ValueModelContentFormulasItemsConditionsItemsResultType,
  );
