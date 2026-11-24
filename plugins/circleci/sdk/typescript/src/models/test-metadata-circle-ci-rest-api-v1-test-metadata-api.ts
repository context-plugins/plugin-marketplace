import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resultSchema, type Result } from "./result.js";

export type TestMetadataCircleCiRestApiV1TestMetadataApi = {
  /** The test message */
  message?: string;
  /** The file containing the test */
  file?: string;
  /** The source of the test */
  source?: string;
  /** The run time of the test in seconds */
  runTime?: number;
  /** The test result */
  result?: Result;
  /** The name of the test */
  name?: string;
  /** The class name of the test */
  classname?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const testMetadataCircleCiRestApiV1TestMetadataApiSchema: Schema<TestMetadataCircleCiRestApiV1TestMetadataApi> =
  s.object<TestMetadataCircleCiRestApiV1TestMetadataApi>(
    {
      message: s.optional(s.string()),
      file: s.optional(s.string()),
      source: s.optional(s.string()),
      runTime: s.optional(s.float64()),
      result: s.optional(s.lazy(() => resultSchema)),
      name: s.optional(s.string()),
      classname: s.optional(s.string()),
      _keysMap: {
        runTime: "run_time",
      },
    },
    { additionalProperties: s.json() },
  );
