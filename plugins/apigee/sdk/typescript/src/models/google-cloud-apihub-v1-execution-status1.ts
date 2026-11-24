import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { currentExecutionStateSchema, type CurrentExecutionState } from "./current-execution-state.js";
import {
  googleCloudApihubV1LastExecution1Schema,
  type GoogleCloudApihubV1LastExecution1,
} from "./google-cloud-apihub-v1-last-execution1.js";

/**
 * Optional. The execution information for the plugin instance action done corresponding to an API
 * hub instance.
 */
export type GoogleCloudApihubV1ExecutionStatus1 = {
  /** Output only. The current state of the execution. */
  currentExecutionState?: CurrentExecutionState;
  /** Output only. The last execution of the plugin instance. */
  lastExecution?: GoogleCloudApihubV1LastExecution1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1ExecutionStatus1Schema: Schema<GoogleCloudApihubV1ExecutionStatus1> =
  s.object<GoogleCloudApihubV1ExecutionStatus1>(
    {
      currentExecutionState: s.optional(s.lazy(() => currentExecutionStateSchema)),
      lastExecution: s.optional(s.lazy(() => googleCloudApihubV1LastExecution1Schema)),
    },
    { additionalProperties: s.json() },
  );
