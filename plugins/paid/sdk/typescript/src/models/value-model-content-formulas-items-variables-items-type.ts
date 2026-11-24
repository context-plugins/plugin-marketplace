import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ValueModelContentFormulasItemsVariablesItemsType = {
  Number: "number",
  String: "string",
  Boolean: "boolean",
  Duration: "duration",
} as const;
export type ValueModelContentFormulasItemsVariablesItemsType =
  | (typeof ValueModelContentFormulasItemsVariablesItemsType)[keyof typeof ValueModelContentFormulasItemsVariablesItemsType]
  | (string & {});

export const valueModelContentFormulasItemsVariablesItemsTypeSchema: EnumSchema<ValueModelContentFormulasItemsVariablesItemsType> =
  s.enumOf<ValueModelContentFormulasItemsVariablesItemsType>(
    ValueModelContentFormulasItemsVariablesItemsType,
  );
