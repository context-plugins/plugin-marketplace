import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1ApiHubInstance1Schema,
  type GoogleCloudApihubV1ApiHubInstance1,
} from "./google-cloud-apihub-v1-api-hub-instance1.js";

/** The LookupApiHubInstance method's response.` */
export type GoogleCloudApihubV1LookupApiHubInstanceResponse = {
  /** API Hub instance for a project if it exists, empty otherwise. */
  apiHubInstance?: GoogleCloudApihubV1ApiHubInstance1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1LookupApiHubInstanceResponseSchema: Schema<GoogleCloudApihubV1LookupApiHubInstanceResponse> =
  s.object<GoogleCloudApihubV1LookupApiHubInstanceResponse>(
    {
      apiHubInstance: s.optional(s.lazy(() => googleCloudApihubV1ApiHubInstance1Schema)),
    },
    { additionalProperties: s.json() },
  );
