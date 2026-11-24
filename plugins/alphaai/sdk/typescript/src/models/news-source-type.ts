import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Where a row was ingested from, the axis the `source_type` filter on `/api/news/` selects on.
 * `gdelt` is press coverage (every publisher channel: the GDELT stream, RSS feeds, directly parsed
 * publisher pages); `sec_form4` an insider transaction (`category` `insider`); `sec_form8k` an 8-K
 * current report (carries the `filing` block, filterable by `item`); `sec_form6k` a foreign private
 * issuer's 6-K earnings release. The row's `original.source` names the outlet or the SEC form in
 * words.
 */
export const NewsSourceType = {
  Gdelt: "gdelt",
  SecForm4: "sec_form4",
  SecForm8K: "sec_form8k",
  SecForm6K: "sec_form6k",
} as const;
export type NewsSourceType = (typeof NewsSourceType)[keyof typeof NewsSourceType] | (string & {});

export const newsSourceTypeSchema: EnumSchema<NewsSourceType> = s.enumOf<NewsSourceType>(NewsSourceType);
