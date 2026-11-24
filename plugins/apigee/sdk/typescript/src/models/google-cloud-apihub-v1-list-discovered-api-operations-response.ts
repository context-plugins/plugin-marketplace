import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1DiscoveredApiOperationSchema,
  type GoogleCloudApihubV1DiscoveredApiOperation,
} from "./google-cloud-apihub-v1-discovered-api-operation.js";

/** Message for response to listing DiscoveredApiOperations */
export type GoogleCloudApihubV1ListDiscoveredApiOperationsResponse = {
  /**
   * The DiscoveredApiOperations from the specified project, location and DiscoveredApiObservation.
   */
  discoveredApiOperations?: GoogleCloudApihubV1DiscoveredApiOperation[];
  /**
   * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted,
   * there are no subsequent pages.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1ListDiscoveredApiOperationsResponseSchema: Schema<GoogleCloudApihubV1ListDiscoveredApiOperationsResponse> =
  s.object<GoogleCloudApihubV1ListDiscoveredApiOperationsResponse>(
    {
      discoveredApiOperations: s.optional(
        s.array(s.lazy(() => googleCloudApihubV1DiscoveredApiOperationSchema)),
      ),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
