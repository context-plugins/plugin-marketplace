import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  merchantProfileSchemeSummarySchema,
  type MerchantProfileSchemeSummary,
} from "../merchant-profile-scheme-summary.js";

export type MerchantProfile1 = MerchantProfileSchemeSummary;

export const merchantProfile1Schema: Schema<MerchantProfile1> = s.of<MerchantProfile1>(
  s.union([s.lazy(() => merchantProfileSchemeSummarySchema)]),
);
