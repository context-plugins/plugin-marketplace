import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { glossaryEntrySchema, type GlossaryEntry } from "./glossary-entry.js";

/** Response message for ListGlossaryEntries */
export type ListGlossaryEntriesResponse = {
  /**
   * Optional. A token to retrieve a page of results. Pass this value in the
   * [ListGLossaryEntriesRequest.page_token] field in the subsequent calls.
   */
  nextPageToken?: string;
  /** Optional. The Glossary Entries */
  glossaryEntries?: GlossaryEntry[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listGlossaryEntriesResponseSchema: Schema<ListGlossaryEntriesResponse> =
  s.object<ListGlossaryEntriesResponse>(
    {
      nextPageToken: s.optional(s.string()),
      glossaryEntries: s.optional(s.array(s.lazy(() => glossaryEntrySchema))),
    },
    { additionalProperties: s.json() },
  );
