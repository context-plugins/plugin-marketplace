import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { values1Schema, type Values1 } from "./values1.js";

export type Applied2 = {
  /** Names of filters currently applied. */
  filters: string[];
  /**
   * Current value for each applied filter. Only keys present in `filters` are populated; others are
   * omitted.
   */
  values: Values1;
};

export const applied2Schema: Schema<Applied2> = s.object<Applied2>({
  filters: s.array(s.string()),
  values: values1Schema,
});
