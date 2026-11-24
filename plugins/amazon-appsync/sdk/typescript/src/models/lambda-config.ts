import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { invokeTypeSchema, type InvokeType } from "./invoke-type.js";

export type LambdaConfig = {
  /** The invocation type for a Lambda data source. */
  invokeType?: InvokeType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const lambdaConfigSchema: Schema<LambdaConfig> = s.object<LambdaConfig>(
  {
    invokeType: s.optional(s.lazy(() => invokeTypeSchema)),
  },
  { additionalProperties: s.json() },
);
