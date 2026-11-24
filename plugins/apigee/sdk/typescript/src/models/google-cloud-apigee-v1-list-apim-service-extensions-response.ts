import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1ApimServiceExtensionSchema,
  type GoogleCloudApigeeV1ApimServiceExtension,
} from "./google-cloud-apigee-v1-apim-service-extension.js";

/** Response for list service extensions. */
export type GoogleCloudApigeeV1ListApimServiceExtensionsResponse = {
  /**
   * Page token that you can include in an `ListApimServiceExtensions` request to retrieve the next
   * page. If omitted, no subsequent pages exist.
   */
  nextPageToken?: string;
  /** service extension in a given organization. */
  apimServiceExtensions?: GoogleCloudApigeeV1ApimServiceExtension[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ListApimServiceExtensionsResponseSchema: Schema<GoogleCloudApigeeV1ListApimServiceExtensionsResponse> =
  s.object<GoogleCloudApigeeV1ListApimServiceExtensionsResponse>(
    {
      nextPageToken: s.optional(s.string()),
      apimServiceExtensions: s.optional(s.array(s.lazy(() => googleCloudApigeeV1ApimServiceExtensionSchema))),
    },
    { additionalProperties: s.json() },
  );
