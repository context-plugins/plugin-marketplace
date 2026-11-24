import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { exportSummarySchema, type ExportSummary } from "./export-summary.js";

export type ListExportsResponse = {
  /** The unique identifier assigned to the bot by Amazon Lex. */
  botId?: string;
  /** The version of the bot that was exported. */
  botVersion?: string;
  /**
   * Summary information for the exports that meet the filter criteria specified in the request. The
   * length of the list is specified in the maxResults parameter. If there are more exports
   * available, the nextToken field contains a token to get the next page of results.
   */
  exportSummaries?: ExportSummary[];
  /**
   * A token that indicates whether there are more results to return in a response to the
   * ListExports operation. If the nextToken field is present, you send the contents as the
   * nextToken parameter of a ListExports operation request to get the next page of results.
   */
  nextToken?: string;
  /** The locale specified in the request. */
  localeId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listExportsResponseSchema: Schema<ListExportsResponse> = s.object<ListExportsResponse>(
  {
    botId: s.optional(s.string()),
    botVersion: s.optional(s.string()),
    exportSummaries: s.optional(s.array(s.lazy(() => exportSummarySchema))),
    nextToken: s.optional(s.string()),
    localeId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
