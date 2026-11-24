import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { collectionTypeSchema, type CollectionType } from "./collection-type.js";
import {
  googleCloudApihubV1ApiData2Schema,
  type GoogleCloudApihubV1ApiData2,
} from "./google-cloud-apihub-v1-api-data2.js";

/** The CollectApiData method's request. */
export type GoogleCloudApihubV1CollectApiDataRequest = {
  /** Required. The type of collection. Applies to all entries in api_data. */
  collectionType?: CollectionType;
  /**
   * Required. The plugin instance collecting the API data. Format:
   * `projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}`.
   */
  pluginInstance?: string;
  /** Required. The API data to be collected. */
  apiData?: GoogleCloudApihubV1ApiData2;
  /**
   * Required. The action ID to be used for collecting the API data. This should map to one of the
   * action IDs specified in action configs in the plugin.
   */
  actionId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1CollectApiDataRequestSchema: Schema<GoogleCloudApihubV1CollectApiDataRequest> =
  s.object<GoogleCloudApihubV1CollectApiDataRequest>(
    {
      collectionType: s.optional(s.lazy(() => collectionTypeSchema)),
      pluginInstance: s.optional(s.string()),
      apiData: s.optional(s.lazy(() => googleCloudApihubV1ApiData2Schema)),
      actionId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
