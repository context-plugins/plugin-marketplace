import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Organization name or keyword. */
export type SearchTerms = string;

export const searchTermsSchema: Schema<SearchTerms> = s.of<SearchTerms>(s.union([s.string()]));
