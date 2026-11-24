import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { compare1Schema, type Compare1 } from "../compare1.js";

/**
 * `"previous_period"` (equal-length window before date_range) or a custom
 * `["YYYY-MM-DD","YYYY-MM-DD"]` pair. Adds a `compare` {value, change%} block — per metric
 * (aggregate), per row (breakdown, each row's true previous value; not on
 * event:status_code/event:goal), or per bucket (time-series) — plus `compare_date_range` to the
 * query echo. The compare range must be the same length as date_range (`previous_period` always is)
 * → an unequal custom pair yields `compare_length_mismatch`.
 */
export type Compare11 = Compare1 | string[];

export const compare11InternalSchema: Schema<Compare11> = s.of<Compare11>(
  s.union([s.lazy(() => compare1Schema), s.array(s.dateOnly())]),
);

export const compare11Schema: Schema<Compare11> = s.lazySchema(() =>
  s.of<Compare11>(
    s.union([s.lazy(() => compare1Schema), s.array(s.dateOnly()).check(s.minLength(2), s.maxLength(2))]),
  ),
);
