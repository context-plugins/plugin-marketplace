import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { additionalSchemeDetailSchema, type AdditionalSchemeDetail } from "../additional-scheme-detail.js";

/**
 * Per-scheme details (name and icon URL) for each additional scheme. Mirrors `additional_schemes` —
 * null when `additional_schemes` is null.
 */
export type AdditionalSchemesDetails = AdditionalSchemeDetail[];

export const additionalSchemesDetailsSchema: Schema<AdditionalSchemesDetails> =
  s.of<AdditionalSchemesDetails>(s.union([s.array(s.lazy(() => additionalSchemeDetailSchema))]));
