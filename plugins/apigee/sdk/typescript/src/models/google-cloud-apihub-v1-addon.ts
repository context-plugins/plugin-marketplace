import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataSourceSchema, type DataSource } from "./data-source.js";
import {
  googleCloudApihubV1AddonConfig1Schema,
  type GoogleCloudApihubV1AddonConfig1,
} from "./google-cloud-apihub-v1-addon-config1.js";
import { state2ApigeeProjectsApiSchema, type State2ApigeeProjectsApi } from "./state2-apigee-projects-api.js";

/** Addon resource. */
export type GoogleCloudApihubV1Addon = {
  /** Output only. The time at which the addon was last updated. */
  updateTime?: string;
  /** Required. The display name of the addon. */
  displayName?: string;
  /** Output only. The time at which the addon was created. */
  createTime?: string;
  /** Optional. The description of the addon. */
  description?: string;
  /** Output only. The state of the addon. */
  state?: State2ApigeeProjectsApi;
  /**
   * Identifier. The name of the addon to enable. Format:
   * `projects/{project}/locations/{location}/addons/{addon}`.
   */
  name?: string;
  /**
   * Required. The data source on which the addon operates. This determines which field in the
   * `config` oneof is used.
   */
  dataSource?: DataSource;
  /** Required. The configuration of the addon. */
  config?: GoogleCloudApihubV1AddonConfig1;
  /**
   * Output only. The Vertex AI region where the BoostSpec Gemini model calls run for this API Hub
   * instance. Populated only for the SpecGen addon (`system-spec-generation`); other addons leave
   * this field empty. `gemini-2.5-flash` is not available in every API Hub region, so the effective
   * region may differ from the API Hub instance's own region. The value follows these semantics: -
   * `""`: BoostSpec is disabled in this region (the addon is not SpecGen, or the API Hub instance
   * region has no configured Gemini endpoint or fallback). - Equal to the API Hub instance region:
   * BoostSpec calls run in-region. - Differs from the API Hub instance region: BoostSpec calls run
   * in the specified fallback region. Callers rendering this field can derive the three display
   * states from this single field combined with the API Hub instance region.
   */
  boostSpecGeminiRegionId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1AddonSchema: Schema<GoogleCloudApihubV1Addon> =
  s.object<GoogleCloudApihubV1Addon>(
    {
      updateTime: s.optional(s.string()),
      displayName: s.optional(s.string()),
      createTime: s.optional(s.string()),
      description: s.optional(s.string()),
      state: s.optional(s.lazy(() => state2ApigeeProjectsApiSchema)),
      name: s.optional(s.string()),
      dataSource: s.optional(s.lazy(() => dataSourceSchema)),
      config: s.optional(s.lazy(() => googleCloudApihubV1AddonConfig1Schema)),
      boostSpecGeminiRegionId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
