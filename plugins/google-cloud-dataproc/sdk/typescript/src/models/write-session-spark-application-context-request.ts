import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sparkWrapperObjectSchema, type SparkWrapperObject } from "./spark-wrapper-object.js";

/** Write Spark Application data to internal storage systems */
export type WriteSessionSparkApplicationContextRequest = {
  /** Required. Parent (Batch) resource reference. */
  parent?: string;
  /** Required. The batch of spark application context objects sent for ingestion. */
  sparkWrapperObjects?: SparkWrapperObject[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const writeSessionSparkApplicationContextRequestSchema: Schema<WriteSessionSparkApplicationContextRequest> =
  s.object<WriteSessionSparkApplicationContextRequest>(
    {
      parent: s.optional(s.string()),
      sparkWrapperObjects: s.optional(s.array(s.lazy(() => sparkWrapperObjectSchema))),
    },
    { additionalProperties: s.json() },
  );
