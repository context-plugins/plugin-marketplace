import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResultTab = {
  /** The unique ID of the tab. Can be passed in a search request to get results for that tab. */
  id?: string;
  /** The number of results in this tab for the current query. */
  count?: number;
  /** The datasource associated with the tab, if any. */
  datasource?: string;
  /** The datasource instance associated with the tab, if any. */
  datasourceInstance?: string;
};

export const resultTabSchema: Schema<ResultTab> = s.object<ResultTab>({
  id: s.optional(s.string()),
  count: s.optional(s.int()),
  datasource: s.optional(s.string()),
  datasourceInstance: s.optional(s.string()),
});
