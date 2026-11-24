import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ValueModelContentSignalsItemsDefaults = number | string;

export const valueModelContentSignalsItemsDefaultsSchema: Schema<ValueModelContentSignalsItemsDefaults> =
  s.of<ValueModelContentSignalsItemsDefaults>(s.union([s.float64(), s.string()]));
