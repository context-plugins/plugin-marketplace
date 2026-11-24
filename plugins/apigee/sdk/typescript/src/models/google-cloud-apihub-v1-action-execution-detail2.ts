import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Required. The execution details for the action to execute. */
export type GoogleCloudApihubV1ActionExecutionDetail2 = {
  /** Required. The action id of the plugin to execute. */
  actionId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1ActionExecutionDetail2Schema: Schema<GoogleCloudApihubV1ActionExecutionDetail2> =
  s.object<GoogleCloudApihubV1ActionExecutionDetail2>(
    {
      actionId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
