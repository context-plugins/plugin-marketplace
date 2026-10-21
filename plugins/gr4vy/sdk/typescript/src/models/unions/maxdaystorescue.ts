import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The rescue window for a transaction, in days, when `autoRescue` is set to `true`. You can specify
 * a value between 1 and 48. For cards, the default is one calendar month. For SEPA, the default is
 * 42 days.
 */
export type Maxdaystorescue = number;

export const maxdaystorescueSchema: Schema<Maxdaystorescue> = s.of<Maxdaystorescue>(s.union([s.int()]));
