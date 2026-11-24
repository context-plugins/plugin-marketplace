import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  conditionalSpecificationSchema,
  type ConditionalSpecification,
} from "./conditional-specification.js";
import { dialogStateSchema, type DialogState } from "./dialog-state.js";
import { responseSpecificationSchema, type ResponseSpecification } from "./response-specification.js";

export type PostFulfillmentStatusSpecification = {
  successResponse?: ResponseSpecification;
  failureResponse?: ResponseSpecification;
  timeoutResponse?: ResponseSpecification;
  successNextStep?: DialogState;
  successConditional?: ConditionalSpecification;
  failureNextStep?: DialogState;
  failureConditional?: ConditionalSpecification;
  timeoutNextStep?: DialogState;
  timeoutConditional?: ConditionalSpecification;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const postFulfillmentStatusSpecificationSchema: Schema<PostFulfillmentStatusSpecification> =
  s.object<PostFulfillmentStatusSpecification>(
    {
      successResponse: s.optional(s.lazy(() => responseSpecificationSchema)),
      failureResponse: s.optional(s.lazy(() => responseSpecificationSchema)),
      timeoutResponse: s.optional(s.lazy(() => responseSpecificationSchema)),
      successNextStep: s.optional(s.lazy(() => dialogStateSchema)),
      successConditional: s.optional(s.lazy(() => conditionalSpecificationSchema)),
      failureNextStep: s.optional(s.lazy(() => dialogStateSchema)),
      failureConditional: s.optional(s.lazy(() => conditionalSpecificationSchema)),
      timeoutNextStep: s.optional(s.lazy(() => dialogStateSchema)),
      timeoutConditional: s.optional(s.lazy(() => conditionalSpecificationSchema)),
    },
    { additionalProperties: s.json() },
  );
