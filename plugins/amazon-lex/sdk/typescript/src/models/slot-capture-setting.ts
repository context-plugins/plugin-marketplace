import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  conditionalSpecificationSchema,
  type ConditionalSpecification,
} from "./conditional-specification.js";
import {
  dialogCodeHookInvocationSettingSchema,
  type DialogCodeHookInvocationSetting,
} from "./dialog-code-hook-invocation-setting.js";
import { dialogStateSchema, type DialogState } from "./dialog-state.js";
import {
  elicitationCodeHookInvocationSettingSchema,
  type ElicitationCodeHookInvocationSetting,
} from "./elicitation-code-hook-invocation-setting.js";
import { responseSpecificationSchema, type ResponseSpecification } from "./response-specification.js";

export type SlotCaptureSetting = {
  captureResponse?: ResponseSpecification;
  captureNextStep?: DialogState;
  captureConditional?: ConditionalSpecification;
  failureResponse?: ResponseSpecification;
  failureNextStep?: DialogState;
  failureConditional?: ConditionalSpecification;
  codeHook?: DialogCodeHookInvocationSetting;
  elicitationCodeHook?: ElicitationCodeHookInvocationSetting;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const slotCaptureSettingSchema: Schema<SlotCaptureSetting> = s.object<SlotCaptureSetting>(
  {
    captureResponse: s.optional(s.lazy(() => responseSpecificationSchema)),
    captureNextStep: s.optional(s.lazy(() => dialogStateSchema)),
    captureConditional: s.optional(s.lazy(() => conditionalSpecificationSchema)),
    failureResponse: s.optional(s.lazy(() => responseSpecificationSchema)),
    failureNextStep: s.optional(s.lazy(() => dialogStateSchema)),
    failureConditional: s.optional(s.lazy(() => conditionalSpecificationSchema)),
    codeHook: s.optional(s.lazy(() => dialogCodeHookInvocationSettingSchema)),
    elicitationCodeHook: s.optional(s.lazy(() => elicitationCodeHookInvocationSettingSchema)),
  },
  { additionalProperties: s.json() },
);
