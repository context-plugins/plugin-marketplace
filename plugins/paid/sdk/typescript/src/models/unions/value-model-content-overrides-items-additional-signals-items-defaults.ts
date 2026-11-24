import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ValueModelContentOverridesItemsAdditionalSignalsItemsDefaults = number | string;

export const valueModelContentOverridesItemsAdditionalSignalsItemsDefaultsSchema: Schema<ValueModelContentOverridesItemsAdditionalSignalsItemsDefaults> =
  s.of<ValueModelContentOverridesItemsAdditionalSignalsItemsDefaults>(s.union([s.float64(), s.string()]));
