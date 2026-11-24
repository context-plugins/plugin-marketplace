import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1ActionExecutionDetail2Schema,
  type GoogleCloudApihubV1ActionExecutionDetail2,
} from "./google-cloud-apihub-v1-action-execution-detail2.js";

/** The ExecutePluginInstanceAction method's request. */
export type GoogleCloudApihubV1ExecutePluginInstanceActionRequest = {
  /** Required. The execution details for the action to execute. */
  actionExecutionDetail?: GoogleCloudApihubV1ActionExecutionDetail2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1ExecutePluginInstanceActionRequestSchema: Schema<GoogleCloudApihubV1ExecutePluginInstanceActionRequest> =
  s.object<GoogleCloudApihubV1ExecutePluginInstanceActionRequest>(
    {
      actionExecutionDetail: s.optional(s.lazy(() => googleCloudApihubV1ActionExecutionDetail2Schema)),
    },
    { additionalProperties: s.json() },
  );
