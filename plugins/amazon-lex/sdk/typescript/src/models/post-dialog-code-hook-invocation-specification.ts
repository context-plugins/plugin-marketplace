import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  conditionalSpecificationSchema,
  type ConditionalSpecification,
} from "./conditional-specification.js";
import { dialogStateSchema, type DialogState } from "./dialog-state.js";
import { responseSpecificationSchema, type ResponseSpecification } from "./response-specification.js";

export type PostDialogCodeHookInvocationSpecification = {
  successResponse?: ResponseSpecification;
  successNextStep?: DialogState;
  successConditional?: ConditionalSpecification;
  failureResponse?: ResponseSpecification;
  failureNextStep?: DialogState;
  failureConditional?: ConditionalSpecification;
  timeoutResponse?: ResponseSpecification;
  timeoutNextStep?: DialogState;
  timeoutConditional?: ConditionalSpecification;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const postDialogCodeHookInvocationSpecificationSchema: Schema<PostDialogCodeHookInvocationSpecification> =
  s.object<PostDialogCodeHookInvocationSpecification>(
    {
      successResponse: s.optional(s.lazy(() => responseSpecificationSchema)),
      successNextStep: s.optional(s.lazy(() => dialogStateSchema)),
      successConditional: s.optional(s.lazy(() => conditionalSpecificationSchema)),
      failureResponse: s.optional(s.lazy(() => responseSpecificationSchema)),
      failureNextStep: s.optional(s.lazy(() => dialogStateSchema)),
      failureConditional: s.optional(s.lazy(() => conditionalSpecificationSchema)),
      timeoutResponse: s.optional(s.lazy(() => responseSpecificationSchema)),
      timeoutNextStep: s.optional(s.lazy(() => dialogStateSchema)),
      timeoutConditional: s.optional(s.lazy(() => conditionalSpecificationSchema)),
    },
    { additionalProperties: s.json() },
  );
