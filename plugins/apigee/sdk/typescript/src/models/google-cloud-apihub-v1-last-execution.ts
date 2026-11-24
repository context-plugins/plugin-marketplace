import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resultSchema, type Result } from "./result.js";

/** The result of the last execution of the plugin instance. */
export type GoogleCloudApihubV1LastExecution = {
  /**
   * Output only. The result metadata of the last execution of the plugin instance. This will be a
   * string representation of a JSON object and will be available on successful execution.
   */
  resultMetadata?: string;
  /** Output only. The last execution start time of the plugin instance. */
  startTime?: string;
  /** Output only. The result of the last execution of the plugin instance. */
  result?: Result;
  /** Output only. The last execution end time of the plugin instance. */
  endTime?: string;
  /** Output only. Error message describing the failure, if any, during the last execution. */
  errorMessage?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1LastExecutionSchema: Schema<GoogleCloudApihubV1LastExecution> =
  s.object<GoogleCloudApihubV1LastExecution>(
    {
      resultMetadata: s.optional(s.string()),
      startTime: s.optional(s.string()),
      result: s.optional(s.lazy(() => resultSchema)),
      endTime: s.optional(s.string()),
      errorMessage: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
