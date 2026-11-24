import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1ApplicationIntegrationEndpointDetails1Schema,
  type GoogleCloudApihubV1ApplicationIntegrationEndpointDetails1,
} from "./google-cloud-apihub-v1-application-integration-endpoint-details1.js";

/**
 * The endpoint to be triggered for curation. The endpoint will be invoked with a request payload
 * containing ApiMetadata. Response should contain curated data in the form of ApiMetadata.
 */
export type GoogleCloudApihubV1Endpoint = {
  /** Required. The details of the Application Integration endpoint to be triggered for curation. */
  applicationIntegrationEndpointDetails?: GoogleCloudApihubV1ApplicationIntegrationEndpointDetails1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1EndpointSchema: Schema<GoogleCloudApihubV1Endpoint> =
  s.object<GoogleCloudApihubV1Endpoint>(
    {
      applicationIntegrationEndpointDetails: s.optional(
        s.lazy(() => googleCloudApihubV1ApplicationIntegrationEndpointDetails1Schema),
      ),
    },
    { additionalProperties: s.json() },
  );
