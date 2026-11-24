import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { associatedTranscriptSchema, type AssociatedTranscript } from "./associated-transcript.js";

export type SearchAssociatedTranscriptsResponse = {
  /** The unique identifier of the bot associated with the transcripts that you are searching. */
  botId?: string;
  /** The version of the bot containing the transcripts that you are searching. */
  botVersion?: string;
  /**
   * The identifier of the language and locale of the transcripts to search. The string must match
   * one of the supported locales. For more information, see Supported languages
   */
  localeId?: string;
  /** The unique identifier of the bot recommendation associated with the transcripts to search. */
  botRecommendationId?: string;
  /**
   * A index that indicates whether there are more results to return in a response to the
   * SearchAssociatedTranscripts operation. If the nextIndex field is present, you send the contents
   * as the nextIndex parameter of a SearchAssociatedTranscriptsRequest operation to get the next
   * page of results.
   */
  nextIndex?: number;
  /** The object that contains the associated transcript that meet the criteria you specified. */
  associatedTranscripts?: AssociatedTranscript[];
  /** The total number of transcripts returned by the search. */
  totalResults?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const searchAssociatedTranscriptsResponseSchema: Schema<SearchAssociatedTranscriptsResponse> =
  s.object<SearchAssociatedTranscriptsResponse>(
    {
      botId: s.optional(s.string()),
      botVersion: s.optional(s.string()),
      localeId: s.optional(s.string()),
      botRecommendationId: s.optional(s.string()),
      nextIndex: s.optional(s.int()),
      associatedTranscripts: s.optional(s.array(s.lazy(() => associatedTranscriptSchema))),
      totalResults: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
