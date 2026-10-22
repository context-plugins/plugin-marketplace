import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { expiryDaysSchema, type ExpiryDays } from "../expiry-days.js";
import { expiryDays1Schema, type ExpiryDays1 } from "../expiry-days1.js";

/**
 * Token lifetime. Defaults to `30` if omitted — a token minted without an explicit choice shouldn't
 * default to the longest lifetime. `"never"` is stored as a ~100-year expiry (the underlying schema
 * field is required and TTL-indexed, so there's no literal null option).
 */
export type ExpiryDays2 = ExpiryDays | ExpiryDays1;

export const expiryDays2Schema: Schema<ExpiryDays2> = s.of<ExpiryDays2>(
  s.union([s.lazy(() => expiryDaysSchema), s.lazy(() => expiryDays1Schema)]),
);
