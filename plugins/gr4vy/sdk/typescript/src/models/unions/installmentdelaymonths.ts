import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Passes the `order.installmentOptions.installmentDelayMonths` field to the Fiserv API. */
export type Installmentdelaymonths = number;

export const installmentdelaymonthsSchema: Schema<Installmentdelaymonths> = s.of<Installmentdelaymonths>(
  s.union([s.int()]),
);
