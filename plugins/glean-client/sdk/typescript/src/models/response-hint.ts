import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Hints for the response content. */
export const ResponseHint = {
  AllResultCounts: "ALL_RESULT_COUNTS",
  FacetResults: "FACET_RESULTS",
  QueryMetadata: "QUERY_METADATA",
  Results: "RESULTS",
  SpellcheckMetadata: "SPELLCHECK_METADATA",
} as const;
export type ResponseHint = (typeof ResponseHint)[keyof typeof ResponseHint] | (string & {});

export const responseHintSchema: EnumSchema<ResponseHint> = s.enumOf<ResponseHint>(ResponseHint);
