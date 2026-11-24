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
import { responseSpecificationSchema, type ResponseSpecification } from "./response-specification.js";

export type InitialResponseSetting = {
  initialResponse?: ResponseSpecification;
  nextStep?: DialogState;
  conditional?: ConditionalSpecification;
  codeHook?: DialogCodeHookInvocationSetting;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const initialResponseSettingSchema: Schema<InitialResponseSetting> = s.object<InitialResponseSetting>(
  {
    initialResponse: s.optional(s.lazy(() => responseSpecificationSchema)),
    nextStep: s.optional(s.lazy(() => dialogStateSchema)),
    conditional: s.optional(s.lazy(() => conditionalSpecificationSchema)),
    codeHook: s.optional(s.lazy(() => dialogCodeHookInvocationSettingSchema)),
  },
  { additionalProperties: s.json() },
);
