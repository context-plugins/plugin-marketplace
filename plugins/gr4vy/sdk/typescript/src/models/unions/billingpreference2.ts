import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { billingpreferenceSchema, type Billingpreference } from "../billingpreference.js";

/** Verbosity of billing address required. */
export type Billingpreference2 = Billingpreference;

export const billingpreference2Schema: Schema<Billingpreference2> = s.of<Billingpreference2>(
  s.union([s.lazy(() => billingpreferenceSchema)]),
);
