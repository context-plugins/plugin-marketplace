import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StackTrace = {
  classLoaderName?: string;
  moduleName?: string;
  moduleVersion?: string;
  methodName?: string;
  fileName?: string;
  lineNumber?: number;
  className?: string;
  nativeMethod?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stackTraceSchema: Schema<StackTrace> = s.object<StackTrace>(
  {
    classLoaderName: s.optional(s.string()),
    moduleName: s.optional(s.string()),
    moduleVersion: s.optional(s.string()),
    methodName: s.optional(s.string()),
    fileName: s.optional(s.string()),
    lineNumber: s.optional(s.int()),
    className: s.optional(s.string()),
    nativeMethod: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
