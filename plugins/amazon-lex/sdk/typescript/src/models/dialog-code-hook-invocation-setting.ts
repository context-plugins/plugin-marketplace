import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  postDialogCodeHookInvocationSpecificationSchema,
  type PostDialogCodeHookInvocationSpecification,
} from "./post-dialog-code-hook-invocation-specification.js";

export type DialogCodeHookInvocationSetting = {
  /** Indicates whether a Lambda function should be invoked for the dialog. */
  enableCodeHookInvocation: boolean;
  /** Determines whether a dialog code hook is used when the intent is activated. */
  active: boolean;
  /** A label that indicates the dialog step from which the dialog code hook is happening. */
  invocationLabel?: string;
  postCodeHookSpecification: PostDialogCodeHookInvocationSpecification;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dialogCodeHookInvocationSettingSchema: Schema<DialogCodeHookInvocationSetting> =
  s.object<DialogCodeHookInvocationSetting>(
    {
      enableCodeHookInvocation: s.boolean(),
      active: s.boolean(),
      invocationLabel: s.optional(s.string()),
      postCodeHookSpecification: postDialogCodeHookInvocationSpecificationSchema,
    },
    { additionalProperties: s.json() },
  );
