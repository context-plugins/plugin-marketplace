import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1ApiOperation1Schema,
  type GoogleCloudApihubV1ApiOperation1,
} from "./google-cloud-apihub-v1-api-operation1.js";
import {
  googleCloudApihubV1Api5Schema,
  type GoogleCloudApihubV1Api5,
} from "./google-cloud-apihub-v1-api5.js";
import {
  googleCloudApihubV1Definition2Schema,
  type GoogleCloudApihubV1Definition2,
} from "./google-cloud-apihub-v1-definition2.js";
import {
  googleCloudApihubV1Deployment1Schema,
  type GoogleCloudApihubV1Deployment1,
} from "./google-cloud-apihub-v1-deployment1.js";
import {
  googleCloudApihubV1Spec3Schema,
  type GoogleCloudApihubV1Spec3,
} from "./google-cloud-apihub-v1-spec3.js";
import {
  googleCloudApihubV1Version5Schema,
  type GoogleCloudApihubV1Version5,
} from "./google-cloud-apihub-v1-version5.js";

/**
 * ApiHubResource is one of the resources such as Api, Operation, Deployment, Definition, Spec and
 * Version resources stored in API-Hub.
 */
export type GoogleCloudApihubV1ApiHubResource = {
  /**
   * This represents Deployment resource in search results. Only name, display_name, description,
   * deployment_type and api_versions fields are populated in search results.
   */
  deployment?: GoogleCloudApihubV1Deployment1;
  /**
   * This represents Version resource in search results. Only name, display_name, description,
   * lifecycle, compliance and accreditation fields are populated in search results.
   */
  version?: GoogleCloudApihubV1Version5;
  /**
   * This represents ApiOperation resource in search results. Only name, description, spec and
   * details fields are populated in search results.
   */
  operation?: GoogleCloudApihubV1ApiOperation1;
  /**
   * This represents Definition resource in search results. Only name field is populated in search
   * results.
   */
  definition?: GoogleCloudApihubV1Definition2;
  /**
   * This represents Api resource in search results. Only name, display_name, description and owner
   * fields are populated in search results.
   */
  api?: GoogleCloudApihubV1Api5;
  /**
   * This represents Spec resource in search results. Only name, display_name, description,
   * spec_type and documentation fields are populated in search results.
   */
  spec?: GoogleCloudApihubV1Spec3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1ApiHubResourceSchema: Schema<GoogleCloudApihubV1ApiHubResource> =
  s.object<GoogleCloudApihubV1ApiHubResource>(
    {
      deployment: s.optional(s.lazy(() => googleCloudApihubV1Deployment1Schema)),
      version: s.optional(s.lazy(() => googleCloudApihubV1Version5Schema)),
      operation: s.optional(s.lazy(() => googleCloudApihubV1ApiOperation1Schema)),
      definition: s.optional(s.lazy(() => googleCloudApihubV1Definition2Schema)),
      api: s.optional(s.lazy(() => googleCloudApihubV1Api5Schema)),
      spec: s.optional(s.lazy(() => googleCloudApihubV1Spec3Schema)),
    },
    { additionalProperties: s.json() },
  );
