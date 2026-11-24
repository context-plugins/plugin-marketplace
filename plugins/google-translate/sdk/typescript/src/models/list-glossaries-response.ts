import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { glossarySchema, type Glossary } from "./glossary.js";

/** Response message for ListGlossaries. */
export type ListGlossariesResponse = {
  /**
   * A token to retrieve a page of results. Pass this value in the
   * [ListGlossariesRequest.page_token] field in the subsequent call to `ListGlossaries` method to
   * retrieve the next page of results.
   */
  nextPageToken?: string;
  /** The list of glossaries for a project. */
  glossaries?: Glossary[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listGlossariesResponseSchema: Schema<ListGlossariesResponse> = s.object<ListGlossariesResponse>(
  {
    nextPageToken: s.optional(s.string()),
    glossaries: s.optional(s.array(s.lazy(() => glossarySchema))),
  },
  { additionalProperties: s.json() },
);
