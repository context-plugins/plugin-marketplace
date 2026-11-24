import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  valueModelContentFormulasItemsConditionsItemsSchema,
  type ValueModelContentFormulasItemsConditionsItems,
} from "./value-model-content-formulas-items-conditions-items.js";
import {
  valueModelContentFormulasItemsDefaultResultSchema,
  type ValueModelContentFormulasItemsDefaultResult,
} from "./value-model-content-formulas-items-default-result.js";
import {
  valueModelContentFormulasItemsVariablesItemsSchema,
  type ValueModelContentFormulasItemsVariablesItems,
} from "./value-model-content-formulas-items-variables-items.js";

export type ValueModelContentFormulasItems = {
  id: string;
  valueTypeSlug: string;
  label: string;
  description?: string;
  variables: ValueModelContentFormulasItemsVariablesItems[];
  expression: string;
  conditions?: ValueModelContentFormulasItemsConditionsItems[];
  defaultResult?: ValueModelContentFormulasItemsDefaultResult;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const valueModelContentFormulasItemsSchema: Schema<ValueModelContentFormulasItems> =
  s.object<ValueModelContentFormulasItems>(
    {
      id: s.string(),
      valueTypeSlug: s.string(),
      label: s.string(),
      description: s.optional(s.string()),
      variables: s.array(s.lazy(() => valueModelContentFormulasItemsVariablesItemsSchema)),
      expression: s.string(),
      conditions: s.optional(s.array(s.lazy(() => valueModelContentFormulasItemsConditionsItemsSchema))),
      defaultResult: s.optional(s.lazy(() => valueModelContentFormulasItemsDefaultResultSchema)),
    },
    { additionalProperties: s.json() },
  );
