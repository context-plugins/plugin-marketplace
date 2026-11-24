import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { languageModelSchema, type LanguageModel } from "./language-model.js";

export type DescribeLanguageModelResponse = {
  languageModel?: LanguageModel;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeLanguageModelResponseSchema: Schema<DescribeLanguageModelResponse> =
  s.object<DescribeLanguageModelResponse>(
    {
      languageModel: s.optional(s.lazy(() => languageModelSchema)),
      _keysMap: {
        languageModel: "LanguageModel",
      },
    },
    { additionalProperties: s.json() },
  );
