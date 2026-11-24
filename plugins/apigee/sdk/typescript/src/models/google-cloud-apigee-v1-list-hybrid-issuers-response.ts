import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1ServiceIssuersMappingSchema,
  type GoogleCloudApigeeV1ServiceIssuersMapping,
} from "./google-cloud-apigee-v1-service-issuers-mapping.js";

export type GoogleCloudApigeeV1ListHybridIssuersResponse = {
  /** Lists of hybrid services and its trusted issuer email ids. */
  issuers?: GoogleCloudApigeeV1ServiceIssuersMapping[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ListHybridIssuersResponseSchema: Schema<GoogleCloudApigeeV1ListHybridIssuersResponse> =
  s.object<GoogleCloudApigeeV1ListHybridIssuersResponse>(
    {
      issuers: s.optional(s.array(s.lazy(() => googleCloudApigeeV1ServiceIssuersMappingSchema))),
    },
    { additionalProperties: s.json() },
  );
