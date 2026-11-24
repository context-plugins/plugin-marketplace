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
import { promptSpecificationSchema, type PromptSpecification } from "./prompt-specification.js";
import { responseSpecificationSchema, type ResponseSpecification } from "./response-specification.js";

export type IntentConfirmationSetting = {
  promptSpecification?: PromptSpecification;
  declinationResponse?: ResponseSpecification;
  /**
   * Specifies whether the intent's confirmation is sent to the user. When this field is false,
   * confirmation and declination responses aren't sent. If the active field isn't specified, the
   * default is true.
   */
  active?: boolean;
  confirmationResponse?: ResponseSpecification;
  confirmationNextStep?: DialogState;
  confirmationConditional?: ConditionalSpecification;
  declinationNextStep?: DialogState;
  declinationConditional?: ConditionalSpecification;
  failureResponse?: ResponseSpecification;
  failureNextStep?: DialogState;
  failureConditional?: ConditionalSpecification;
  codeHook?: DialogCodeHookInvocationSetting;
  elicitationCodeHook?: ElicitationCodeHookInvocationSetting;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const intentConfirmationSettingSchema: Schema<IntentConfirmationSetting> =
  s.object<IntentConfirmationSetting>(
    {
      promptSpecification: s.optional(s.lazy(() => promptSpecificationSchema)),
      declinationResponse: s.optional(s.lazy(() => responseSpecificationSchema)),
      active: s.optional(s.boolean()),
      confirmationResponse: s.optional(s.lazy(() => responseSpecificationSchema)),
      confirmationNextStep: s.optional(s.lazy(() => dialogStateSchema)),
      confirmationConditional: s.optional(s.lazy(() => conditionalSpecificationSchema)),
      declinationNextStep: s.optional(s.lazy(() => dialogStateSchema)),
      declinationConditional: s.optional(s.lazy(() => conditionalSpecificationSchema)),
      failureResponse: s.optional(s.lazy(() => responseSpecificationSchema)),
      failureNextStep: s.optional(s.lazy(() => dialogStateSchema)),
      failureConditional: s.optional(s.lazy(() => conditionalSpecificationSchema)),
      codeHook: s.optional(s.lazy(() => dialogCodeHookInvocationSettingSchema)),
      elicitationCodeHook: s.optional(s.lazy(() => elicitationCodeHookInvocationSettingSchema)),
    },
    { additionalProperties: s.json() },
  );
