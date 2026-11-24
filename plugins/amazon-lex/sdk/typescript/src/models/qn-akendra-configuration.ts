import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type QnAKendraConfiguration = {
  /** The ARN of the Amazon Kendra index to use. */
  kendraIndex: string;
  /** Specifies whether to enable an Amazon Kendra filter string or not. */
  queryFilterStringEnabled?: boolean;
  /**
   * Contains the Amazon Kendra filter string to use if enabled. For more information on the Amazon
   * Kendra search filter JSON format, see Using document attributes to filter search results.
   */
  queryFilterString?: string;
  /**
   * Specifies whether to return an exact response from the Amazon Kendra index or to let the Amazon
   * Bedrock model you select generate a response based on the results. To use this feature, you
   * must first add FAQ questions to your index by following the steps at Adding frequently asked
   * questions (FAQs) to an index.
   */
  exactResponse?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const qnAKendraConfigurationSchema: Schema<QnAKendraConfiguration> = s.object<QnAKendraConfiguration>(
  {
    kendraIndex: s.string(),
    queryFilterStringEnabled: s.optional(s.boolean()),
    queryFilterString: s.optional(s.string()),
    exactResponse: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
