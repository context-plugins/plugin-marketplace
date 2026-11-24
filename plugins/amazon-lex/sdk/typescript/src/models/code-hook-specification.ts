import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { lambdaCodeHookSchema, type LambdaCodeHook } from "./lambda-code-hook.js";

export type CodeHookSpecification = {
  lambdaCodeHook: LambdaCodeHook;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const codeHookSpecificationSchema: Schema<CodeHookSpecification> = s.object<CodeHookSpecification>(
  {
    lambdaCodeHook: lambdaCodeHookSchema,
  },
  { additionalProperties: s.json() },
);
