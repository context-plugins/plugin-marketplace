import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  valueModelContentFormulasItemsVariablesItemsDerivedFromTargetUnitSchema,
  type ValueModelContentFormulasItemsVariablesItemsDerivedFromTargetUnit,
} from "./value-model-content-formulas-items-variables-items-derived-from-target-unit.js";

export type ValueModelContentFormulasItemsVariablesItemsDerivedFrom = {
  sourceField: string;
  targetUnit: ValueModelContentFormulasItemsVariablesItemsDerivedFromTargetUnit;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const valueModelContentFormulasItemsVariablesItemsDerivedFromSchema: Schema<ValueModelContentFormulasItemsVariablesItemsDerivedFrom> =
  s.object<ValueModelContentFormulasItemsVariablesItemsDerivedFrom>(
    {
      sourceField: s.string(),
      targetUnit: valueModelContentFormulasItemsVariablesItemsDerivedFromTargetUnitSchema,
    },
    { additionalProperties: s.json() },
  );
