import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1InstanceSchema,
  type GoogleCloudApigeeV1Instance,
} from "./google-cloud-apigee-v1-instance.js";

/** Response for ListInstances. */
export type GoogleCloudApigeeV1ListInstancesResponse = {
  /**
   * Page token that you can include in a ListInstance request to retrieve the next page of content.
   * If omitted, no subsequent pages exist.
   */
  nextPageToken?: string;
  /** Instances in the specified organization. */
  instances?: GoogleCloudApigeeV1Instance[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ListInstancesResponseSchema: Schema<GoogleCloudApigeeV1ListInstancesResponse> =
  s.object<GoogleCloudApigeeV1ListInstancesResponse>(
    {
      nextPageToken: s.optional(s.string()),
      instances: s.optional(s.array(s.lazy(() => googleCloudApigeeV1InstanceSchema))),
    },
    { additionalProperties: s.json() },
  );
