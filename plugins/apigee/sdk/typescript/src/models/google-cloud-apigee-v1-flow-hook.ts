import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GoogleCloudApigeeV1FlowHook = {
  /**
   * Optional. Flag that specifies whether execution should continue if the flow hook throws an
   * exception. Set to `true` to continue execution. Set to `false` to stop execution if the flow
   * hook throws an exception. Defaults to `true`.
   */
  continueOnError?: boolean;
  /** Description of the flow hook. */
  description?: string;
  /**
   * Output only. Where in the API call flow the flow hook is invoked. Must be one of
   * `PreProxyFlowHook`, `PostProxyFlowHook`, `PreTargetFlowHook`, or `PostTargetFlowHook`.
   */
  flowHookPoint?: string;
  /** Shared flow attached to this flow hook, or empty if there is none attached. */
  sharedFlow?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1FlowHookSchema: Schema<GoogleCloudApigeeV1FlowHook> =
  s.object<GoogleCloudApigeeV1FlowHook>(
    {
      continueOnError: s.optional(s.boolean()),
      description: s.optional(s.string()),
      flowHookPoint: s.optional(s.string()),
      sharedFlow: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
