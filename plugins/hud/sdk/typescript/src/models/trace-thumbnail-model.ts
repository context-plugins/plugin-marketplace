import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { iconUrlSchema, type IconUrl } from "./unions/icon-url.js";
import { modelNameSchema, type ModelName } from "./unions/model-name.js";
import { providerNameSchema, type ProviderName } from "./unions/provider-name.js";
import { sdkAgentTypeSchema, type SdkAgentType } from "./unions/sdk-agent-type.js";

export type TraceThumbnailModel = {
  id: string;
  name: string;
  modelName?: ModelName;
  providerName?: ProviderName;
  iconUrl?: IconUrl;
  sdkAgentType?: SdkAgentType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const traceThumbnailModelSchema: Schema<TraceThumbnailModel> = s.object<TraceThumbnailModel>(
  {
    id: s.string(),
    name: s.string(),
    modelName: s.optional(s.lazy(() => modelNameSchema)),
    providerName: s.optional(s.lazy(() => providerNameSchema)),
    iconUrl: s.optional(s.lazy(() => iconUrlSchema)),
    sdkAgentType: s.optional(s.lazy(() => sdkAgentTypeSchema)),
    _keysMap: {
      modelName: "model_name",
      providerName: "provider_name",
      iconUrl: "icon_url",
      sdkAgentType: "sdk_agent_type",
    },
  },
  { additionalProperties: s.json() },
);
