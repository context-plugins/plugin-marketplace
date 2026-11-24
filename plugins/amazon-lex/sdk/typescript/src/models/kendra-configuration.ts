import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type KendraConfiguration = {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Kendra index that you want the
   * AMAZON.KendraSearchIntent intent to search. The index must be in the same account and Region as
   * the Amazon Lex bot.
   */
  kendraIndex: string;
  /**
   * Determines whether the AMAZON.KendraSearchIntent intent uses a custom query string to query the
   * Amazon Kendra index.
   */
  queryFilterStringEnabled?: boolean;
  /**
   * A query filter that Amazon Lex sends to Amazon Kendra to filter the response from a query. The
   * filter is in the format defined by Amazon Kendra. For more information, see Filtering queries.
   */
  queryFilterString?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const kendraConfigurationSchema: Schema<KendraConfiguration> = s.object<KendraConfiguration>(
  {
    kendraIndex: s.string(),
    queryFilterStringEnabled: s.optional(s.boolean()),
    queryFilterString: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
