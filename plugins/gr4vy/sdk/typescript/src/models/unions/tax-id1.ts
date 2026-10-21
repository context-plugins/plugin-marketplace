import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { taxIdSchema, type TaxId } from "../tax-id.js";

/** The tax ID information associated with the billing details. */
export type TaxId1 = TaxId;

export const taxId1Schema: Schema<TaxId1> = s.of<TaxId1>(s.union([s.lazy(() => taxIdSchema)]));
