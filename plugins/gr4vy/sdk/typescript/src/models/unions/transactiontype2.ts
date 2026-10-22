import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { transactiontypeSchema, type Transactiontype } from "../transactiontype.js";

/** Type of transaction. */
export type Transactiontype2 = Transactiontype;

export const transactiontype2Schema: Schema<Transactiontype2> = s.of<Transactiontype2>(
  s.union([s.lazy(() => transactiontypeSchema)]),
);
