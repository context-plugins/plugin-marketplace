import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1DiscoveredApiObservationSchema,
  type GoogleCloudApihubV1DiscoveredApiObservation,
} from "./google-cloud-apihub-v1-discovered-api-observation.js";

/** Message for response to listing DiscoveredApiObservations */
export type GoogleCloudApihubV1ListDiscoveredApiObservationsResponse = {
  /** The DiscoveredApiObservation from the specified project and location. */
  discoveredApiObservations?: GoogleCloudApihubV1DiscoveredApiObservation[];
  /**
   * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted,
   * there are no subsequent pages.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1ListDiscoveredApiObservationsResponseSchema: Schema<GoogleCloudApihubV1ListDiscoveredApiObservationsResponse> =
  s.object<GoogleCloudApihubV1ListDiscoveredApiObservationsResponse>(
    {
      discoveredApiObservations: s.optional(
        s.array(s.lazy(() => googleCloudApihubV1DiscoveredApiObservationSchema)),
      ),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
