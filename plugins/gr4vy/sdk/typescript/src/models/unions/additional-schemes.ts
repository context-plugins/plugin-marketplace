import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { cardSchemeSchema, type CardScheme } from "../card-scheme.js";

/** Additional schemes of the card besides the primary scheme. */
export type AdditionalSchemes = CardScheme[];

export const additionalSchemesSchema: Schema<AdditionalSchemes> = s.of<AdditionalSchemes>(
  s.union([s.array(s.lazy(() => cardSchemeSchema))]),
);
