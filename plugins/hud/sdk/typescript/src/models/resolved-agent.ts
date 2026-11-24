import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { modelIdSchema, type ModelId } from "./unions/model-id.js";

export type ResolvedAgent = {
  modelId?: ModelId;
  modelName: string;
  sdkAgentType: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resolvedAgentSchema: Schema<ResolvedAgent> = s.object<ResolvedAgent>(
  {
    modelId: s.optional(s.lazy(() => modelIdSchema)),
    modelName: s.string(),
    sdkAgentType: s.string(),
    _keysMap: {
      modelId: "model_id",
      modelName: "model_name",
      sdkAgentType: "sdk_agent_type",
    },
  },
  { additionalProperties: s.json() },
);
