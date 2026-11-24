import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GoogleCloudApigeeV1FlowHookConfig = {
  /**
   * Name of the flow hook in the following format:
   * `organizations/{org}/environments/{env}/flowhooks/{point}`. Valid `point` values include:
   * `PreProxyFlowHook`, `PostProxyFlowHook`, `PreTargetFlowHook`, and `PostTargetFlowHook`
   */
  name?: string;
  /**
   * Name of the shared flow to invoke in the following format:
   * `organizations/{org}/sharedflows/{sharedflow}`
   */
  sharedFlowName?: string;
  /**
   * Flag that specifies whether the flow should abort after an error in the flow hook. Defaults to
   * `true` (continue on error).
   */
  continueOnError?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1FlowHookConfigSchema: Schema<GoogleCloudApigeeV1FlowHookConfig> =
  s.object<GoogleCloudApigeeV1FlowHookConfig>(
    {
      name: s.optional(s.string()),
      sharedFlowName: s.optional(s.string()),
      continueOnError: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
