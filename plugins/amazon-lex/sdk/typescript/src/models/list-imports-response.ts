import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { importSummarySchema, type ImportSummary } from "./import-summary.js";

export type ListImportsResponse = {
  /** The unique identifier assigned by Amazon Lex to the bot. */
  botId?: string;
  /** The version of the bot that was imported. It will always be DRAFT. */
  botVersion?: string;
  /**
   * Summary information for the imports that meet the filter criteria specified in the request. The
   * length of the list is specified in the maxResults parameter. If there are more imports
   * available, the nextToken field contains a token to get the next page of results.
   */
  importSummaries?: ImportSummary[];
  /**
   * A token that indicates whether there are more results to return in a response to the
   * ListImports operation. If the nextToken field is present, you send the contents as the
   * nextToken parameter of a ListImports operation request to get the next page of results.
   */
  nextToken?: string;
  /** The locale specified in the request. */
  localeId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listImportsResponseSchema: Schema<ListImportsResponse> = s.object<ListImportsResponse>(
  {
    botId: s.optional(s.string()),
    botVersion: s.optional(s.string()),
    importSummaries: s.optional(s.array(s.lazy(() => importSummarySchema))),
    nextToken: s.optional(s.string()),
    localeId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
