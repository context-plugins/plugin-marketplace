import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { personSchema, type Person } from "./person.js";
import { querySuggestionSchema, type QuerySuggestion } from "./query-suggestion.js";

export type QuerySuggestionList = {
  suggestions?: QuerySuggestion[];
  person?: Person;
};

export const querySuggestionListSchema: Schema<QuerySuggestionList> = s.object<QuerySuggestionList>({
  suggestions: s.optional(s.array(s.lazy(() => querySuggestionSchema))),
  person: s.optional(s.lazy(() => personSchema)),
});
