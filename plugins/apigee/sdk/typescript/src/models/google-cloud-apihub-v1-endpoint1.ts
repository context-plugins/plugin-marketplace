import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1ApplicationIntegrationEndpointDetails1Schema,
  type GoogleCloudApihubV1ApplicationIntegrationEndpointDetails1,
} from "./google-cloud-apihub-v1-application-integration-endpoint-details1.js";

/** Required. The endpoint to be triggered for curation. */
export type GoogleCloudApihubV1Endpoint1 = {
  /** Required. The details of the Application Integration endpoint to be triggered for curation. */
  applicationIntegrationEndpointDetails?: GoogleCloudApihubV1ApplicationIntegrationEndpointDetails1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1Endpoint1Schema: Schema<GoogleCloudApihubV1Endpoint1> =
  s.object<GoogleCloudApihubV1Endpoint1>(
    {
      applicationIntegrationEndpointDetails: s.optional(
        s.lazy(() => googleCloudApihubV1ApplicationIntegrationEndpointDetails1Schema),
      ),
    },
    { additionalProperties: s.json() },
  );
