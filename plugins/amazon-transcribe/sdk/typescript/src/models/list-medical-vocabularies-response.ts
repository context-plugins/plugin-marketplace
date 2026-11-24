import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusAmazonTranscribeServiceMedicalVocabularyApiSchema,
  type StatusAmazonTranscribeServiceMedicalVocabularyApi,
} from "./status-amazon-transcribe-service-medical-vocabulary-api.js";
import { vocabularyInfoSchema, type VocabularyInfo } from "./vocabulary-info.js";

export type ListMedicalVocabulariesResponse = {
  /**
   * Lists all custom medical vocabularies that have the status specified in your request. Custom
   * vocabularies are ordered by creation date, with the newest vocabulary first.
   */
  status?: StatusAmazonTranscribeServiceMedicalVocabularyApi;
  /**
   * If NextToken is present in your response, it indicates that not all results are displayed. To
   * view the next set of results, copy the string associated with the NextToken parameter in your
   * results output, then run your request again including NextToken with the value of the copied
   * string. Repeat as needed to view all your results.
   */
  nextToken?: string;
  /**
   * Provides information about the custom medical vocabularies that match the criteria specified in
   * your request.
   */
  vocabularies?: VocabularyInfo[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listMedicalVocabulariesResponseSchema: Schema<ListMedicalVocabulariesResponse> =
  s.object<ListMedicalVocabulariesResponse>(
    {
      status: s.optional(s.lazy(() => statusAmazonTranscribeServiceMedicalVocabularyApiSchema)),
      nextToken: s.optional(s.string()),
      vocabularies: s.optional(s.array(s.lazy(() => vocabularyInfoSchema))),
      _keysMap: {
        status: "Status",
        nextToken: "NextToken",
        vocabularies: "Vocabularies",
      },
    },
    { additionalProperties: s.json() },
  );
