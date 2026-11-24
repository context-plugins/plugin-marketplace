import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { laySchema, type Lay } from "../lay.js";
import { lay1Schema, type Lay1 } from "../lay1.js";

/**
 * Lowest price first. An array of exchange offers; on `each-way` and `extra-place` an object `{win,
 * place}` of two such arrays; absent on `dutching`.
 */
export type Lay2 = Lay[] | Lay1;

export const lay2Schema: Schema<Lay2> = s.of<Lay2>(
  s.union([s.array(s.lazy(() => laySchema)), s.lazy(() => lay1Schema)]),
);
