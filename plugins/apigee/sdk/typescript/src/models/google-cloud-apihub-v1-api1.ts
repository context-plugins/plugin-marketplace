import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1AttributeValuesSchema,
  type GoogleCloudApihubV1AttributeValues,
} from "./google-cloud-apihub-v1-attribute-values.js";
import {
  googleCloudApihubV1AttributeValues10Schema,
  type GoogleCloudApihubV1AttributeValues10,
} from "./google-cloud-apihub-v1-attribute-values10.js";
import {
  googleCloudApihubV1AttributeValues11Schema,
  type GoogleCloudApihubV1AttributeValues11,
} from "./google-cloud-apihub-v1-attribute-values11.js";
import {
  googleCloudApihubV1AttributeValues12Schema,
  type GoogleCloudApihubV1AttributeValues12,
} from "./google-cloud-apihub-v1-attribute-values12.js";
import {
  googleCloudApihubV1AttributeValues13Schema,
  type GoogleCloudApihubV1AttributeValues13,
} from "./google-cloud-apihub-v1-attribute-values13.js";
import {
  googleCloudApihubV1AttributeValues14Schema,
  type GoogleCloudApihubV1AttributeValues14,
} from "./google-cloud-apihub-v1-attribute-values14.js";
import {
  googleCloudApihubV1AttributeValues15Schema,
  type GoogleCloudApihubV1AttributeValues15,
} from "./google-cloud-apihub-v1-attribute-values15.js";
import {
  googleCloudApihubV1AttributeValues16Schema,
  type GoogleCloudApihubV1AttributeValues16,
} from "./google-cloud-apihub-v1-attribute-values16.js";
import {
  googleCloudApihubV1AttributeValues17Schema,
  type GoogleCloudApihubV1AttributeValues17,
} from "./google-cloud-apihub-v1-attribute-values17.js";
import {
  googleCloudApihubV1AttributeValues9Schema,
  type GoogleCloudApihubV1AttributeValues9,
} from "./google-cloud-apihub-v1-attribute-values9.js";
import {
  googleCloudApihubV1Documentation3Schema,
  type GoogleCloudApihubV1Documentation3,
} from "./google-cloud-apihub-v1-documentation3.js";
import {
  googleCloudApihubV1Owner3Schema,
  type GoogleCloudApihubV1Owner3,
} from "./google-cloud-apihub-v1-owner3.js";
import {
  googleCloudApihubV1SourceMetadataSchema,
  type GoogleCloudApihubV1SourceMetadata,
} from "./google-cloud-apihub-v1-source-metadata.js";

/** Optional. The API. */
export type GoogleCloudApihubV1Api1 = {
  /** Optional. The documentation for the API resource. */
  documentation?: GoogleCloudApihubV1Documentation3;
  /**
   * Optional. The target users for the API. This maps to the following system defined attribute:
   * `projects/{project}/locations/{location}/attributes/system-target-user` attribute. The number
   * of values for this attribute will be based on the cardinality of the attribute. The same can be
   * retrieved via GetAttribute API. All values should be from the list of allowed values defined
   * for the attribute.
   */
  targetUser?: GoogleCloudApihubV1AttributeValues9;
  /**
   * Optional. The api functional requirements associated with the API resource. Cardinality is 1
   * for this attribute. This maps to the following system defined attribute:
   * `projects/{project}/locations/{location}/attributes/system-api-functional-requirements`
   * attribute. The value of the attribute should be a proper URI, and in case of Cloud Storage URI,
   * it should point to a Cloud Storage object, not a directory.
   */
  apiFunctionalRequirements?: GoogleCloudApihubV1AttributeValues10;
  /** Optional. Owner details for the API resource. */
  owner?: GoogleCloudApihubV1Owner3;
  /** Output only. The time at which the API resource was created. */
  createTime?: string;
  /**
   * Identifier. The name of the API resource in the API Hub. Format:
   * `projects/{project}/locations/{location}/apis/{api}`
   */
  name?: string;
  /** Output only. The time at which the API resource was last updated. */
  updateTime?: string;
  /**
   * Optional. The team owning the API. This maps to the following system defined attribute:
   * `projects/{project}/locations/{location}/attributes/system-team` attribute. The number of
   * values for this attribute will be based on the cardinality of the attribute. The same can be
   * retrieved via GetAttribute API. All values should be from the list of allowed values defined
   * for the attribute.
   */
  team?: GoogleCloudApihubV1AttributeValues11;
  /**
   * Optional. The api technical requirements associated with the API resource. Cardinality is 1 for
   * this attribute. This maps to the following system defined attribute:
   * `projects/{project}/locations/{location}/attributes/system-api-technical-requirements`
   * attribute. The value of the attribute should be a proper URI, and in case of Cloud Storage URI,
   * it should point to a Cloud Storage object, not a directory.
   */
  apiTechnicalRequirements?: GoogleCloudApihubV1AttributeValues12;
  /**
   * Optional. The selected version for an API resource. This can be used when special handling is
   * needed on client side for particular version of the API. Format is
   * `projects/{project}/locations/{location}/apis/{api}/versions/{version}`
   */
  selectedVersion?: string;
  /**
   * Optional. The type of the service. This maps to the following system defined attribute:
   * `projects/{project}/locations/{location}/attributes/system-service-type` attribute. The
   * cardinality of this attribute is 1. All values should be from the list of allowed values
   * defined for the attribute.
   */
  serviceType?: GoogleCloudApihubV1AttributeValues13;
  /**
   * Optional. The list of user defined attributes associated with the API resource. The key is the
   * attribute name. It will be of the format:
   * `projects/{project}/locations/{location}/attributes/{attribute}`. The value is the attribute
   * values associated with the resource.
   */
  attributes?: Record<string, GoogleCloudApihubV1AttributeValues>;
  /**
   * Output only. The list of versions present in an API resource. Note: An API resource can be
   * associated with more than 1 version. Format is
   * `projects/{project}/locations/{location}/apis/{api}/versions/{version}`
   */
  versions?: string[];
  /** Required. The display name of the API resource. */
  displayName?: string;
  /**
   * Optional. The maturity level of the API. This maps to the following system defined attribute:
   * `projects/{project}/locations/{location}/attributes/system-maturity-level` attribute. The
   * number of values for this attribute will be based on the cardinality of the attribute. The same
   * can be retrieved via GetAttribute API. All values should be from the list of allowed values
   * defined for the attribute.
   */
  maturityLevel?: GoogleCloudApihubV1AttributeValues14;
  /**
   * Optional. Fingerprint of the API resource. This must be unique for each API resource. It can
   * neither be unset nor be updated to an existing fingerprint of another API resource.
   */
  fingerprint?: string;
  /**
   * Optional. The style of the API. This maps to the following system defined attribute:
   * `projects/{project}/locations/{location}/attributes/system-api-style` attribute. The number of
   * values for this attribute will be based on the cardinality of the attribute. The same can be
   * retrieved via GetAttribute API. All values should be from the list of allowed values defined
   * for the attribute.
   */
  apiStyle?: GoogleCloudApihubV1AttributeValues15;
  /**
   * Optional. The business unit owning the API. This maps to the following system defined
   * attribute: `projects/{project}/locations/{location}/attributes/system-business-unit` attribute.
   * The number of values for this attribute will be based on the cardinality of the attribute. The
   * same can be retrieved via GetAttribute API. All values should be from the list of allowed
   * values defined for the attribute.
   */
  businessUnit?: GoogleCloudApihubV1AttributeValues16;
  /**
   * Optional. The api requirement doc associated with the API resource. Cardinality is 1 for this
   * attribute. This maps to the following system defined attribute:
   * `projects/{project}/locations/{location}/attributes/system-api-requirements` attribute. The
   * value of the attribute should be a proper URI, and in case of Cloud Storage URI, it should
   * point to a Cloud Storage object, not a directory.
   */
  apiRequirements?: GoogleCloudApihubV1AttributeValues17;
  /** Optional. The description of the API resource. */
  description?: string;
  /** Output only. The list of sources and metadata from the sources of the API resource. */
  sourceMetadata?: GoogleCloudApihubV1SourceMetadata[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1Api1Schema: Schema<GoogleCloudApihubV1Api1> =
  s.object<GoogleCloudApihubV1Api1>(
    {
      documentation: s.optional(s.lazy(() => googleCloudApihubV1Documentation3Schema)),
      targetUser: s.optional(s.lazy(() => googleCloudApihubV1AttributeValues9Schema)),
      apiFunctionalRequirements: s.optional(s.lazy(() => googleCloudApihubV1AttributeValues10Schema)),
      owner: s.optional(s.lazy(() => googleCloudApihubV1Owner3Schema)),
      createTime: s.optional(s.string()),
      name: s.optional(s.string()),
      updateTime: s.optional(s.string()),
      team: s.optional(s.lazy(() => googleCloudApihubV1AttributeValues11Schema)),
      apiTechnicalRequirements: s.optional(s.lazy(() => googleCloudApihubV1AttributeValues12Schema)),
      selectedVersion: s.optional(s.string()),
      serviceType: s.optional(s.lazy(() => googleCloudApihubV1AttributeValues13Schema)),
      attributes: s.optional(
        s.record(
          s.string(),
          s.lazy(() => googleCloudApihubV1AttributeValuesSchema),
        ),
      ),
      versions: s.optional(s.array(s.string())),
      displayName: s.optional(s.string()),
      maturityLevel: s.optional(s.lazy(() => googleCloudApihubV1AttributeValues14Schema)),
      fingerprint: s.optional(s.string()),
      apiStyle: s.optional(s.lazy(() => googleCloudApihubV1AttributeValues15Schema)),
      businessUnit: s.optional(s.lazy(() => googleCloudApihubV1AttributeValues16Schema)),
      apiRequirements: s.optional(s.lazy(() => googleCloudApihubV1AttributeValues17Schema)),
      description: s.optional(s.string()),
      sourceMetadata: s.optional(s.array(s.lazy(() => googleCloudApihubV1SourceMetadataSchema))),
    },
    { additionalProperties: s.json() },
  );
