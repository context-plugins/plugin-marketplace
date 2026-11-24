import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sparkWrapperObjectSchema, type SparkWrapperObject } from "./spark-wrapper-object.js";

/** Write Spark Application data to internal storage systems */
export type WriteSparkApplicationContextRequest = {
  /** Required. Parent (Batch) resource reference. */
  parent?: string;
  sparkWrapperObjects?: SparkWrapperObject[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const writeSparkApplicationContextRequestSchema: Schema<WriteSparkApplicationContextRequest> =
  s.object<WriteSparkApplicationContextRequest>(
    {
      parent: s.optional(s.string()),
      sparkWrapperObjects: s.optional(s.array(s.lazy(() => sparkWrapperObjectSchema))),
    },
    { additionalProperties: s.json() },
  );
