import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TestMetadata = {
  /** The test message */
  message?: string;
  /** The source of the test */
  source?: string;
  /** The run time of the test */
  runTime?: string;
  /** The file containing the test */
  file?: string;
  /** The result of the test */
  result?: string;
  /** The name of the test */
  name?: string;
  /** The class name of the test */
  classname?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const testMetadataSchema: Schema<TestMetadata> = s.object<TestMetadata>(
  {
    message: s.optional(s.string()),
    source: s.optional(s.string()),
    runTime: s.optional(s.string()),
    file: s.optional(s.string()),
    result: s.optional(s.string()),
    name: s.optional(s.string()),
    classname: s.optional(s.string()),
    _keysMap: {
      runTime: "run_time",
    },
  },
  { additionalProperties: s.json() },
);
