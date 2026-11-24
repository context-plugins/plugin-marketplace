import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusAmazonTranscribeServiceVocabulariesApiSchema,
  type StatusAmazonTranscribeServiceVocabulariesApi,
} from "./status-amazon-transcribe-service-vocabularies-api.js";
import {
  vocabularyInfoAmazonTranscribeServiceVocabulariesApiSchema,
  type VocabularyInfoAmazonTranscribeServiceVocabulariesApi,
} from "./vocabulary-info-amazon-transcribe-service-vocabularies-api.js";

export type ListVocabulariesResponse = {
  /**
   * Lists all custom vocabularies that have the status specified in your request. Vocabularies are
   * ordered by creation date, with the newest vocabulary first.
   */
  status?: StatusAmazonTranscribeServiceVocabulariesApi;
  /**
   * If NextToken is present in your response, it indicates that not all results are displayed. To
   * view the next set of results, copy the string associated with the NextToken parameter in your
   * results output, then run your request again including NextToken with the value of the copied
   * string. Repeat as needed to view all your results.
   */
  nextToken?: string;
  /**
   * Provides information about the custom vocabularies that match the criteria specified in your
   * request.
   */
  vocabularies?: VocabularyInfoAmazonTranscribeServiceVocabulariesApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listVocabulariesResponseSchema: Schema<ListVocabulariesResponse> =
  s.object<ListVocabulariesResponse>(
    {
      status: s.optional(s.lazy(() => statusAmazonTranscribeServiceVocabulariesApiSchema)),
      nextToken: s.optional(s.string()),
      vocabularies: s.optional(
        s.array(s.lazy(() => vocabularyInfoAmazonTranscribeServiceVocabulariesApiSchema)),
      ),
      _keysMap: {
        status: "Status",
        nextToken: "NextToken",
        vocabularies: "Vocabularies",
      },
    },
    { additionalProperties: s.json() },
  );
