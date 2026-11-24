import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ValueModelContentFormulasItemsConditionsItemsValue = number | string | boolean;

export const valueModelContentFormulasItemsConditionsItemsValueSchema: Schema<ValueModelContentFormulasItemsConditionsItemsValue> =
  s.of<ValueModelContentFormulasItemsConditionsItemsValue>(s.union([s.float64(), s.string(), s.boolean()]));
