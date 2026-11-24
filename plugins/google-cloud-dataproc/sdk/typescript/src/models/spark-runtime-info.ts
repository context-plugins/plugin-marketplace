import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SparkRuntimeInfo = {
  javaHome?: string;
  javaVersion?: string;
  scalaVersion?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sparkRuntimeInfoSchema: Schema<SparkRuntimeInfo> = s.object<SparkRuntimeInfo>(
  {
    javaHome: s.optional(s.string()),
    javaVersion: s.optional(s.string()),
    scalaVersion: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
