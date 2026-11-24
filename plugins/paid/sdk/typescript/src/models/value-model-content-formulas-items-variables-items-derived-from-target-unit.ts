import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ValueModelContentFormulasItemsVariablesItemsDerivedFromTargetUnit = {
  Seconds: "seconds",
  Minutes: "minutes",
  Hours: "hours",
  Days: "days",
} as const;
export type ValueModelContentFormulasItemsVariablesItemsDerivedFromTargetUnit =
  | (typeof ValueModelContentFormulasItemsVariablesItemsDerivedFromTargetUnit)[keyof typeof ValueModelContentFormulasItemsVariablesItemsDerivedFromTargetUnit]
  | (string & {});

export const valueModelContentFormulasItemsVariablesItemsDerivedFromTargetUnitSchema: EnumSchema<ValueModelContentFormulasItemsVariablesItemsDerivedFromTargetUnit> =
  s.enumOf<ValueModelContentFormulasItemsVariablesItemsDerivedFromTargetUnit>(
    ValueModelContentFormulasItemsVariablesItemsDerivedFromTargetUnit,
  );
