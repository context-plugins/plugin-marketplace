import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  googlePayAssuranceDetailsSchema,
  type GooglePayAssuranceDetails,
} from "../google-pay-assurance-details.js";

/** The assurance details provided by Google Pay */
export type AssuranceDetails = GooglePayAssuranceDetails;

export const assuranceDetailsSchema: Schema<AssuranceDetails> = s.of<AssuranceDetails>(
  s.union([s.lazy(() => googlePayAssuranceDetailsSchema)]),
);
