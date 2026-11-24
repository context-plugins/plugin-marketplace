import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ModelsLexKendraConfiguration = {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Kendra index that you want the
   * AMAZON.KendraSearchIntent intent to search. The index must be in the same account and Region as
   * the Amazon Lex bot. If the Amazon Kendra index does not exist, you get an exception when you
   * call the PutIntent operation.
   */
  kendraIndex: string;
  /**
   * A query filter that Amazon Lex sends to Amazon Kendra to filter the response from the query.
   * The filter is in the format defined by Amazon Kendra. For more information, see Filtering
   * queries. You can override this filter string with a new filter string at runtime.
   */
  queryFilterString?: string;
  /**
   * The Amazon Resource Name (ARN) of an IAM role that has permission to search the Amazon Kendra
   * index. The role must be in the same account and Region as the Amazon Lex bot. If the role does
   * not exist, you get an exception when you call the PutIntent operation.
   */
  role: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const modelsLexKendraConfigurationSchema: Schema<ModelsLexKendraConfiguration> =
  s.object<ModelsLexKendraConfiguration>(
    {
      kendraIndex: s.string(),
      queryFilterString: s.optional(s.string()),
      role: s.string(),
    },
    { additionalProperties: s.json() },
  );
