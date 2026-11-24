import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ValueModelContentOverridesItemsSignalOverridesDefaults = number | string;

export const valueModelContentOverridesItemsSignalOverridesDefaultsSchema: Schema<ValueModelContentOverridesItemsSignalOverridesDefaults> =
  s.of<ValueModelContentOverridesItemsSignalOverridesDefaults>(s.union([s.float64(), s.string()]));
