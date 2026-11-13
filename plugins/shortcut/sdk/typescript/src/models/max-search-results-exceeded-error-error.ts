import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Error returned when total maximum supported results have been reached. */
export type MaxSearchResultsExceededErrorError = {
  /**
   * The name for this type of error, `maximum-results-exceeded`
   *
   * @default "maximum-results-exceeded"
   */
  error?: "maximum-results-exceeded";
  /** An explanatory message: "A maximum of 1000 search results are supported." */
  message: string;
  /** The maximum number of search results supported, `1000` @default 1000 */
  maximumResults?: 1000;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const maxSearchResultsExceededErrorErrorSchema: Schema<MaxSearchResultsExceededErrorError> =
  s.object<MaxSearchResultsExceededErrorError>(
    {
      error: s.defaulted(s.literal("maximum-results-exceeded"), "maximum-results-exceeded"),
      message: s.string(),
      maximumResults: s.defaulted(s.literal(1000), 1000),
      _keysMap: {
        maximumResults: "maximum-results",
      },
    },
    { additionalProperties: s.json() },
  );
