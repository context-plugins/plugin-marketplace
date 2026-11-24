import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ValueModelContentFormulasItemsDefaultResultType = {
  Constant: "constant",
  Expression: "expression",
} as const;
export type ValueModelContentFormulasItemsDefaultResultType =
  | (typeof ValueModelContentFormulasItemsDefaultResultType)[keyof typeof ValueModelContentFormulasItemsDefaultResultType]
  | (string & {});

export const valueModelContentFormulasItemsDefaultResultTypeSchema: EnumSchema<ValueModelContentFormulasItemsDefaultResultType> =
  s.enumOf<ValueModelContentFormulasItemsDefaultResultType>(ValueModelContentFormulasItemsDefaultResultType);
