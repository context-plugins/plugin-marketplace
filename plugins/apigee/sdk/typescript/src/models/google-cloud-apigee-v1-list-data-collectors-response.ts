import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1DataCollectorSchema,
  type GoogleCloudApigeeV1DataCollector,
} from "./google-cloud-apigee-v1-data-collector.js";

/** Response for ListDataCollectors. */
export type GoogleCloudApigeeV1ListDataCollectorsResponse = {
  /** Data collectors in the specified organization. */
  dataCollectors?: GoogleCloudApigeeV1DataCollector[];
  /**
   * Page token that you can include in a ListDataCollectors request to retrieve the next page. If
   * omitted, no subsequent pages exist.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ListDataCollectorsResponseSchema: Schema<GoogleCloudApigeeV1ListDataCollectorsResponse> =
  s.object<GoogleCloudApigeeV1ListDataCollectorsResponse>(
    {
      dataCollectors: s.optional(s.array(s.lazy(() => googleCloudApigeeV1DataCollectorSchema))),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
