import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { applicationInfo1Schema, type ApplicationInfo1 } from "./application-info1.js";

/** A summary of Spark Application */
export type SparkApplication = {
  /** Identifier. Name of the spark application */
  name?: string;
  /** Output only. High level information corresponding to an application. */
  application?: ApplicationInfo1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sparkApplicationSchema: Schema<SparkApplication> = s.object<SparkApplication>(
  {
    name: s.optional(s.string()),
    application: s.optional(s.lazy(() => applicationInfo1Schema)),
  },
  { additionalProperties: s.json() },
);
