import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1AdditionalSpecContentSchema,
  type GoogleCloudApihubV1AdditionalSpecContent,
} from "./google-cloud-apihub-v1-additional-spec-content.js";
import {
  googleCloudApihubV1AttributeValuesSchema,
  type GoogleCloudApihubV1AttributeValues,
} from "./google-cloud-apihub-v1-attribute-values.js";
import {
  googleCloudApihubV1AttributeValues18Schema,
  type GoogleCloudApihubV1AttributeValues18,
} from "./google-cloud-apihub-v1-attribute-values18.js";
import {
  googleCloudApihubV1Documentation4Schema,
  type GoogleCloudApihubV1Documentation4,
} from "./google-cloud-apihub-v1-documentation4.js";
import {
  googleCloudApihubV1LintResponse2Schema,
  type GoogleCloudApihubV1LintResponse2,
} from "./google-cloud-apihub-v1-lint-response2.js";
import {
  googleCloudApihubV1SourceMetadataSchema,
  type GoogleCloudApihubV1SourceMetadata,
} from "./google-cloud-apihub-v1-source-metadata.js";
import {
  googleCloudApihubV1SpecContents4Schema,
  type GoogleCloudApihubV1SpecContents4,
} from "./google-cloud-apihub-v1-spec-contents4.js";
import {
  googleCloudApihubV1SpecDetails2Schema,
  type GoogleCloudApihubV1SpecDetails2,
} from "./google-cloud-apihub-v1-spec-details2.js";
import { parsingModeSchema, type ParsingMode } from "./parsing-mode.js";

/**
 * Represents a spec associated with an API version in the API Hub. Note that specs of various types
 * can be uploaded, however parsing of details is supported for OpenAPI spec currently.
 */
export type GoogleCloudApihubV1Spec = {
  /** Optional. The lint response for the spec. */
  lintResponse?: GoogleCloudApihubV1LintResponse2;
  /**
   * Optional. The deployments linked directly to this spec. Format is
   * `projects/{project}/locations/{location}/deployments/{deployment}`
   */
  deployments?: string[];
  /**
   * Identifier. The name of the spec. Format:
   * `projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}`
   */
  name?: string;
  /**
   * Optional. The list of user defined attributes associated with the spec. The key is the
   * attribute name. It will be of the format:
   * `projects/{project}/locations/{location}/attributes/{attribute}`. The value is the attribute
   * values associated with the resource.
   */
  attributes?: Record<string, GoogleCloudApihubV1AttributeValues>;
  /** Output only. The list of sources and metadata from the sources of the spec. */
  sourceMetadata?: GoogleCloudApihubV1SourceMetadata[];
  /** Optional. Input only. The contents of the uploaded spec. */
  contents?: GoogleCloudApihubV1SpecContents4;
  /**
   * Optional. The URI of the spec source in case file is uploaded from an external version control
   * system.
   */
  sourceUri?: string;
  /** Output only. The additional spec contents for the spec. */
  additionalSpecContents?: GoogleCloudApihubV1AdditionalSpecContent[];
  /** Output only. The time at which the spec was created. */
  createTime?: string;
  /** Output only. The time at which the spec was last updated. */
  updateTime?: string;
  /** Required. The display name of the spec. This can contain the file name of the spec. */
  displayName?: string;
  /**
   * Required. The type of spec. The value should be one of the allowed values defined for
   * `projects/{project}/locations/{location}/attributes/system-spec-type` attribute. The number of
   * values for this attribute will be based on the cardinality of the attribute. The same can be
   * retrieved via GetAttribute API. Note, this field is mandatory if content is provided.
   */
  specType?: GoogleCloudApihubV1AttributeValues18;
  /** Output only. Details parsed from the spec. */
  details?: GoogleCloudApihubV1SpecDetails2;
  /**
   * Optional. Input only. Enum specifying the parsing mode for OpenAPI Specification (OAS) parsing.
   */
  parsingMode?: ParsingMode;
  /**
   * Optional. The documentation of the spec. For OpenAPI spec, this will be populated from
   * `externalDocs` in OpenAPI spec.
   */
  documentation?: GoogleCloudApihubV1Documentation4;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1SpecSchema: Schema<GoogleCloudApihubV1Spec> =
  s.object<GoogleCloudApihubV1Spec>(
    {
      lintResponse: s.optional(s.lazy(() => googleCloudApihubV1LintResponse2Schema)),
      deployments: s.optional(s.array(s.string())),
      name: s.optional(s.string()),
      attributes: s.optional(
        s.record(
          s.string(),
          s.lazy(() => googleCloudApihubV1AttributeValuesSchema),
        ),
      ),
      sourceMetadata: s.optional(s.array(s.lazy(() => googleCloudApihubV1SourceMetadataSchema))),
      contents: s.optional(s.lazy(() => googleCloudApihubV1SpecContents4Schema)),
      sourceUri: s.optional(s.string()),
      additionalSpecContents: s.optional(
        s.array(s.lazy(() => googleCloudApihubV1AdditionalSpecContentSchema)),
      ),
      createTime: s.optional(s.string()),
      updateTime: s.optional(s.string()),
      displayName: s.optional(s.string()),
      specType: s.optional(s.lazy(() => googleCloudApihubV1AttributeValues18Schema)),
      details: s.optional(s.lazy(() => googleCloudApihubV1SpecDetails2Schema)),
      parsingMode: s.optional(s.lazy(() => parsingModeSchema)),
      documentation: s.optional(s.lazy(() => googleCloudApihubV1Documentation4Schema)),
    },
    { additionalProperties: s.json() },
  );
