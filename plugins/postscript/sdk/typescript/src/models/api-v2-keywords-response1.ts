import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { keywordSchema, type Keyword } from "./keyword.js";

export type ApiV2KeywordsResponse1 = {
  keywords?: Keyword[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2KeywordsResponse1Schema: Schema<ApiV2KeywordsResponse1> = s.object<ApiV2KeywordsResponse1>(
  {
    keywords: s.optional(s.array(s.lazy(() => keywordSchema))),
  },
  { additionalProperties: s.json() },
);
