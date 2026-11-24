import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Optional keyword search queries, as in SearchRequest. Used together with objective to focus
 * excerpts on the most relevant content.
 */
export type SearchQueries = string[];

export const searchQueriesSchema: Schema<SearchQueries> = s.of<SearchQueries>(s.union([s.array(s.string())]));
