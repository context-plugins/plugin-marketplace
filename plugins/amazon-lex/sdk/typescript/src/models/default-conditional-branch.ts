import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dialogStateSchema, type DialogState } from "./dialog-state.js";
import { responseSpecificationSchema, type ResponseSpecification } from "./response-specification.js";

export type DefaultConditionalBranch = {
  nextStep?: DialogState;
  response?: ResponseSpecification;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const defaultConditionalBranchSchema: Schema<DefaultConditionalBranch> =
  s.object<DefaultConditionalBranch>(
    {
      nextStep: s.optional(s.lazy(() => dialogStateSchema)),
      response: s.optional(s.lazy(() => responseSpecificationSchema)),
    },
    { additionalProperties: s.json() },
  );
