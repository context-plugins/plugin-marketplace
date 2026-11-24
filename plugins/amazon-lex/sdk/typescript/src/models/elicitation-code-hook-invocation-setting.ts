import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ElicitationCodeHookInvocationSetting = {
  /** Indicates whether a Lambda function should be invoked for the dialog. */
  enableCodeHookInvocation: boolean;
  /** A label that indicates the dialog step from which the dialog code hook is happening. */
  invocationLabel?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const elicitationCodeHookInvocationSettingSchema: Schema<ElicitationCodeHookInvocationSetting> =
  s.object<ElicitationCodeHookInvocationSetting>(
    {
      enableCodeHookInvocation: s.boolean(),
      invocationLabel: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
