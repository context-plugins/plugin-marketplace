import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1ResourceFileSchema,
  type GoogleCloudApigeeV1ResourceFile,
} from "./google-cloud-apigee-v1-resource-file.js";

/** Response for ListEnvironmentResources */
export type GoogleCloudApigeeV1ListEnvironmentResourcesResponse = {
  /** List of resources files. */
  resourceFile?: GoogleCloudApigeeV1ResourceFile[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ListEnvironmentResourcesResponseSchema: Schema<GoogleCloudApigeeV1ListEnvironmentResourcesResponse> =
  s.object<GoogleCloudApigeeV1ListEnvironmentResourcesResponse>(
    {
      resourceFile: s.optional(s.array(s.lazy(() => googleCloudApigeeV1ResourceFileSchema))),
    },
    { additionalProperties: s.json() },
  );
