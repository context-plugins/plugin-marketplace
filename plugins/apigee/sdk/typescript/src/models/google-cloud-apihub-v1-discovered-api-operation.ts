import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { classificationSchema, type Classification } from "./classification.js";
import {
  googleCloudApihubV1HttpOperationDetails2Schema,
  type GoogleCloudApihubV1HttpOperationDetails2,
} from "./google-cloud-apihub-v1-http-operation-details2.js";
import {
  googleCloudApihubV1MatchResultSchema,
  type GoogleCloudApihubV1MatchResult,
} from "./google-cloud-apihub-v1-match-result.js";
import {
  googleCloudApihubV1SourceMetadata1Schema,
  type GoogleCloudApihubV1SourceMetadata1,
} from "./google-cloud-apihub-v1-source-metadata1.js";

/** DiscoveredApiOperation represents an API Operation observed in one of the sources. */
export type GoogleCloudApihubV1DiscoveredApiOperation = {
  /** Output only. Create time stamp of the discovered API operation in API Hub. */
  createTime?: string;
  /**
   * Identifier. The name of the discovered API Operation. Format:
   * `projects/{project}/locations/{location}/discoveredApiObservations/{discovered_api_observation}/discoveredApiOperations/{discovered_api_operation}`
   */
  name?: string;
  /** Optional. The number of occurrences of this API Operation. */
  count?: string;
  /** Output only. The classification of the discovered API operation. */
  classification?: Classification;
  /** Output only. The metadata of the source from which the api operation was collected. */
  sourceMetadata?: GoogleCloudApihubV1SourceMetadata1;
  /** Output only. Update time stamp of the discovered API operation in API Hub. */
  updateTime?: string;
  /** Optional. An HTTP Operation. */
  httpOperation?: GoogleCloudApihubV1HttpOperationDetails2;
  /** Optional. Last seen time stamp */
  lastSeenTime?: string;
  /**
   * Output only. The list of matched results for the discovered API operation. This will be
   * populated only if the classification is known. The current usecase is for a single match.
   * Keeping it repeated to support multiple matches in future.
   */
  matchResults?: GoogleCloudApihubV1MatchResult[];
  /** Optional. First seen time stamp */
  firstSeenTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1DiscoveredApiOperationSchema: Schema<GoogleCloudApihubV1DiscoveredApiOperation> =
  s.object<GoogleCloudApihubV1DiscoveredApiOperation>(
    {
      createTime: s.optional(s.string()),
      name: s.optional(s.string()),
      count: s.optional(s.string()),
      classification: s.optional(s.lazy(() => classificationSchema)),
      sourceMetadata: s.optional(s.lazy(() => googleCloudApihubV1SourceMetadata1Schema)),
      updateTime: s.optional(s.string()),
      httpOperation: s.optional(s.lazy(() => googleCloudApihubV1HttpOperationDetails2Schema)),
      lastSeenTime: s.optional(s.string()),
      matchResults: s.optional(s.array(s.lazy(() => googleCloudApihubV1MatchResultSchema))),
      firstSeenTime: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
