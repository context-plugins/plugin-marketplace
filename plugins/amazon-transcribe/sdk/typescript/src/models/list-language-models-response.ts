import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { languageModelSchema, type LanguageModel } from "./language-model.js";

export type ListLanguageModelsResponse = {
  /**
   * If NextToken is present in your response, it indicates that not all results are displayed. To
   * view the next set of results, copy the string associated with the NextToken parameter in your
   * results output, then run your request again including NextToken with the value of the copied
   * string. Repeat as needed to view all your results.
   */
  nextToken?: string;
  /**
   * Provides information about the custom language models that match the criteria specified in your
   * request.
   */
  models?: LanguageModel[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listLanguageModelsResponseSchema: Schema<ListLanguageModelsResponse> =
  s.object<ListLanguageModelsResponse>(
    {
      nextToken: s.optional(s.string()),
      models: s.optional(s.array(s.lazy(() => languageModelSchema))),
      _keysMap: {
        nextToken: "NextToken",
        models: "Models",
      },
    },
    { additionalProperties: s.json() },
  );
