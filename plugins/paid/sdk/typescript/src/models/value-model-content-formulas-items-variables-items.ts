import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  valueModelContentFormulasItemsVariablesItemsDerivedFromSchema,
  type ValueModelContentFormulasItemsVariablesItemsDerivedFrom,
} from "./value-model-content-formulas-items-variables-items-derived-from.js";
import {
  ValueModelContentFormulasItemsVariablesItemsType,
  valueModelContentFormulasItemsVariablesItemsTypeSchema,
} from "./value-model-content-formulas-items-variables-items-type.js";

export type ValueModelContentFormulasItemsVariablesItems = {
  id: string;
  label: string;
  /** @default ValueModelContentFormulasItemsVariablesItemsType.Number */
  type?: ValueModelContentFormulasItemsVariablesItemsType;
  description?: string;
  derivedFrom?: ValueModelContentFormulasItemsVariablesItemsDerivedFrom;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const valueModelContentFormulasItemsVariablesItemsSchema: Schema<ValueModelContentFormulasItemsVariablesItems> =
  s.object<ValueModelContentFormulasItemsVariablesItems>(
    {
      id: s.string(),
      label: s.string(),
      type: s.defaulted(
        valueModelContentFormulasItemsVariablesItemsTypeSchema,
        ValueModelContentFormulasItemsVariablesItemsType.Number,
      ),
      description: s.optional(s.string()),
      derivedFrom: s.optional(s.lazy(() => valueModelContentFormulasItemsVariablesItemsDerivedFromSchema)),
    },
    { additionalProperties: s.json() },
  );
