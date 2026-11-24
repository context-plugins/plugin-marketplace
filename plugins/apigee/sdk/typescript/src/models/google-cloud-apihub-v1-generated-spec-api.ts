import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1GeneratedSpecApiSource2Schema,
  type GoogleCloudApihubV1GeneratedSpecApiSource2,
} from "./google-cloud-apihub-v1-generated-spec-api-source2.js";
import { state1ApigeeProjectsApiSchema, type State1ApigeeProjectsApi } from "./state1-apigee-projects-api.js";

/** An API the pipeline is tracking for spec generation. */
export type GoogleCloudApihubV1GeneratedSpecApi = {
  /** Output only. Human-readable display name; server-derived. */
  displayName?: string;
  /** Output only. The time at which the resource was last updated. */
  updateTime?: string;
  /**
   * Output only. The time at which the most recent spec was generated. Unset while `state ==
   * SPEC_API_REGISTERED`.
   */
  lastSpecGeneratedTime?: string;
  /** Output only. The time at which the resource was created. */
  createTime?: string;
  /**
   * Output only. The full resource name of the associated catalog API. Format:
   * `projects/{project}/locations/{location}/apis/{api}`
   */
  api?: string;
  /** Output only. Where the pipeline observed this API. */
  source?: GoogleCloudApihubV1GeneratedSpecApiSource2;
  /**
   * Output only. The full resource name of the associated catalog Spec; populated only when `state
   * == SPEC_ASSOCIATED`. Format:
   * `projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}`
   */
  spec?: string;
  /**
   * Output only. The full resource name of the associated catalog Deployment. Format:
   * `projects/{project}/locations/{location}/deployments/{deployment}`
   */
  deployment?: string;
  /**
   * Output only. The full resource name of the associated catalog Version. Format:
   * `projects/{project}/locations/{location}/apis/{api}/versions/{version}`
   */
  version?: string;
  /** Output only. The current lifecycle state. */
  state?: State1ApigeeProjectsApi;
  /**
   * Identifier. The full resource name. The trailing segment is the pipeline-generated identifier.
   * Format: `projects/{project}/locations/{location}/generatedSpecApis/{generated_spec_api}`
   */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1GeneratedSpecApiSchema: Schema<GoogleCloudApihubV1GeneratedSpecApi> =
  s.object<GoogleCloudApihubV1GeneratedSpecApi>(
    {
      displayName: s.optional(s.string()),
      updateTime: s.optional(s.string()),
      lastSpecGeneratedTime: s.optional(s.string()),
      createTime: s.optional(s.string()),
      api: s.optional(s.string()),
      source: s.optional(s.lazy(() => googleCloudApihubV1GeneratedSpecApiSource2Schema)),
      spec: s.optional(s.string()),
      deployment: s.optional(s.string()),
      version: s.optional(s.string()),
      state: s.optional(s.lazy(() => state1ApigeeProjectsApiSchema)),
      name: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
