import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1AttributeValuesSchema,
  type GoogleCloudApihubV1AttributeValues,
} from "./google-cloud-apihub-v1-attribute-values.js";
import {
  googleCloudApihubV1AttributeValues1Schema,
  type GoogleCloudApihubV1AttributeValues1,
} from "./google-cloud-apihub-v1-attribute-values1.js";
import {
  googleCloudApihubV1AttributeValues2Schema,
  type GoogleCloudApihubV1AttributeValues2,
} from "./google-cloud-apihub-v1-attribute-values2.js";
import {
  googleCloudApihubV1AttributeValues3Schema,
  type GoogleCloudApihubV1AttributeValues3,
} from "./google-cloud-apihub-v1-attribute-values3.js";
import {
  googleCloudApihubV1AttributeValues4Schema,
  type GoogleCloudApihubV1AttributeValues4,
} from "./google-cloud-apihub-v1-attribute-values4.js";
import {
  googleCloudApihubV1AttributeValues5Schema,
  type GoogleCloudApihubV1AttributeValues5,
} from "./google-cloud-apihub-v1-attribute-values5.js";
import {
  googleCloudApihubV1Documentation1Schema,
  type GoogleCloudApihubV1Documentation1,
} from "./google-cloud-apihub-v1-documentation1.js";
import {
  googleCloudApihubV1SourceMetadataSchema,
  type GoogleCloudApihubV1SourceMetadata,
} from "./google-cloud-apihub-v1-source-metadata.js";

/** Optional. The deployment. */
export type GoogleCloudApihubV1Deployment2 = {
  /**
   * Optional. The uri where users can navigate to for the management of the deployment. This maps
   * to the following system defined attribute:
   * `projects/{project}/locations/{location}/attributes/system-management-url` The number of values
   * for this attribute will be based on the cardinality of the attribute. The same can be retrieved
   * via GetAttribute API. The value of the attribute should be a valid URL.
   */
  managementUrl?: GoogleCloudApihubV1AttributeValues1;
  /** Required. The display name of the deployment. */
  displayName?: string;
  /** Optional. The description of the deployment. */
  description?: string;
  /** Output only. The list of sources and metadata from the sources of the deployment. */
  sourceMetadata?: GoogleCloudApihubV1SourceMetadata[];
  /** Output only. The time at which the deployment was created. */
  createTime?: string;
  /** Output only. The time at which the deployment was last updated. */
  updateTime?: string;
  /**
   * Required. The type of deployment. This maps to the following system defined attribute:
   * `projects/{project}/locations/{location}/attributes/system-deployment-type` attribute. The
   * number of values for this attribute will be based on the cardinality of the attribute. The same
   * can be retrieved via GetAttribute API. All values should be from the list of allowed values
   * defined for the attribute.
   */
  deploymentType?: GoogleCloudApihubV1AttributeValues2;
  /**
   * Optional. A revision identifier for the underlying gateway configuration that this deployment
   * serves. For Apigee gateway variants, this is typically the proxy revision number populated
   * automatically when the deployment is discovered.
   */
  sourceRevision?: string;
  /**
   * Output only. The specs linked directly to this deployment. Note: a deployment could serve
   * multiple specs (e.g., across different revisions of the same underlying gateway configuration).
   */
  specs?: string[];
  /** Optional. The documentation of the deployment. */
  documentation?: GoogleCloudApihubV1Documentation1;
  /**
   * Required. The resource URI identifies the deployment within its gateway. For Apigee gateways,
   * its recommended to use the format: organizations/{org}/environments/{env}/apis/{api}. For ex:
   * if a proxy with name `orders` is deployed in `staging` environment of `cymbal` organization,
   * the resource URI would be: `organizations/cymbal/environments/staging/apis/orders`.
   */
  resourceUri?: string;
  /**
   * Output only. The API versions linked to this deployment. Note: A particular deployment could be
   * linked to multiple different API versions (of same or different APIs).
   */
  apiVersions?: string[];
  /**
   * Identifier. The name of the deployment. Format:
   * `projects/{project}/locations/{location}/deployments/{deployment}`
   */
  name?: string;
  /**
   * Optional. The uri where additional source specific information for this deployment can be
   * found. This maps to the following system defined attribute:
   * `projects/{project}/locations/{location}/attributes/system-source-uri` The number of values for
   * this attribute will be based on the cardinality of the attribute. The same can be retrieved via
   * GetAttribute API. The value of the attribute should be a valid URI, and in case of Cloud
   * Storage URI, it should point to a Cloud Storage object, not a directory.
   */
  sourceUri?: GoogleCloudApihubV1AttributeValues3;
  /**
   * Optional. The project to which the deployment belongs. For Google Cloud gateways, this will
   * refer to the project identifier. For others like Edge/OPDK, this will refer to the org
   * identifier.
   */
  sourceProject?: string;
  /**
   * Optional. The SLO for this deployment. This maps to the following system defined attribute:
   * `projects/{project}/locations/{location}/attributes/system-slo` attribute. The number of values
   * for this attribute will be based on the cardinality of the attribute. The same can be retrieved
   * via GetAttribute API. All values should be from the list of allowed values defined for the
   * attribute.
   */
  slo?: GoogleCloudApihubV1AttributeValues4;
  /**
   * Required. The endpoints at which this deployment resource is listening for API requests. This
   * could be a list of complete URIs, hostnames or an IP addresses.
   */
  endpoints?: string[];
  /**
   * Optional. The environment mapping to this deployment. This maps to the following system defined
   * attribute: `projects/{project}/locations/{location}/attributes/system-environment` attribute.
   * The number of values for this attribute will be based on the cardinality of the attribute. The
   * same can be retrieved via GetAttribute API. All values should be from the list of allowed
   * values defined for the attribute.
   */
  environment?: GoogleCloudApihubV1AttributeValues5;
  /**
   * Optional. The environment at source for the deployment. For example: prod, dev, staging, etc.
   */
  sourceEnvironment?: string;
  /** Output only. The API operations linked directly to this deployment. */
  apiOperations?: string[];
  /**
   * Optional. The list of user defined attributes associated with the deployment resource. The key
   * is the attribute name. It will be of the format:
   * `projects/{project}/locations/{location}/attributes/{attribute}`. The value is the attribute
   * values associated with the resource.
   */
  attributes?: Record<string, GoogleCloudApihubV1AttributeValues>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1Deployment2Schema: Schema<GoogleCloudApihubV1Deployment2> =
  s.object<GoogleCloudApihubV1Deployment2>(
    {
      managementUrl: s.optional(s.lazy(() => googleCloudApihubV1AttributeValues1Schema)),
      displayName: s.optional(s.string()),
      description: s.optional(s.string()),
      sourceMetadata: s.optional(s.array(s.lazy(() => googleCloudApihubV1SourceMetadataSchema))),
      createTime: s.optional(s.string()),
      updateTime: s.optional(s.string()),
      deploymentType: s.optional(s.lazy(() => googleCloudApihubV1AttributeValues2Schema)),
      sourceRevision: s.optional(s.string()),
      specs: s.optional(s.array(s.string())),
      documentation: s.optional(s.lazy(() => googleCloudApihubV1Documentation1Schema)),
      resourceUri: s.optional(s.string()),
      apiVersions: s.optional(s.array(s.string())),
      name: s.optional(s.string()),
      sourceUri: s.optional(s.lazy(() => googleCloudApihubV1AttributeValues3Schema)),
      sourceProject: s.optional(s.string()),
      slo: s.optional(s.lazy(() => googleCloudApihubV1AttributeValues4Schema)),
      endpoints: s.optional(s.array(s.string())),
      environment: s.optional(s.lazy(() => googleCloudApihubV1AttributeValues5Schema)),
      sourceEnvironment: s.optional(s.string()),
      apiOperations: s.optional(s.array(s.string())),
      attributes: s.optional(
        s.record(
          s.string(),
          s.lazy(() => googleCloudApihubV1AttributeValuesSchema),
        ),
      ),
    },
    { additionalProperties: s.json() },
  );
