import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Required. Runtime type of the Apigee organization based on the Apigee subscription purchased. */
export const RuntimeType = {
  RuntimeTypeUnspecified: "RUNTIME_TYPE_UNSPECIFIED",
  Cloud: "CLOUD",
  Hybrid: "HYBRID",
} as const;
export type RuntimeType = (typeof RuntimeType)[keyof typeof RuntimeType] | (string & {});

export const runtimeTypeSchema: EnumSchema<RuntimeType> = s.enumOf<RuntimeType>(RuntimeType);
