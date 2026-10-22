import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { cardSchemeSchema, type CardScheme } from "../card-scheme.js";

/**
 * Additional schemes of the card besides the primary scheme. Only applies to card payment methods.
 */
export type AdditionalSchemes1 = CardScheme[];

export const additionalSchemes1Schema: Schema<AdditionalSchemes1> = s.of<AdditionalSchemes1>(
  s.union([s.array(s.lazy(() => cardSchemeSchema))]),
);
