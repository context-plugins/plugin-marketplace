import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { billingpreference1Schema, type Billingpreference1 } from "../billingpreference1.js";

/** Verbosity of the billing address required by the merchant. */
export type Billingpreference11 = Billingpreference1;

export const billingpreference11Schema: Schema<Billingpreference11> = s.of<Billingpreference11>(
  s.union([s.lazy(() => billingpreference1Schema)]),
);
