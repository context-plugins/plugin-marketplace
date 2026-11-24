import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * As in SearchRequest, a natural-language description of the underlying question or goal driving
 * the request. Used together with search_queries to focus excerpts on the most relevant content.,
 * Natural-language description of the underlying question or goal driving the search. Used together
 * with search_queries to focus results on the most relevant content. Should be self-contained with
 * enough context to understand the intent of the search.
 */
export type Objective = string;

export const objectiveSchema: Schema<Objective> = s.of<Objective>(s.union([s.string()]));
