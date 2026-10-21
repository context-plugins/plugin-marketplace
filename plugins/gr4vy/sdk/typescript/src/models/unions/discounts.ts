import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Passes additional discounts to the Affirm widget. */
export type Discounts = Record<string, Record<string, unknown>>;

export const discountsSchema: Schema<Discounts> = s.of<Discounts>(
  s.union([s.record(s.string(), s.record(s.string(), s.unknown()))]),
);
