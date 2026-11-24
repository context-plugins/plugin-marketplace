import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The details for the action to execute. */
export type GoogleCloudApihubV1ActionExecutionDetail = {
  /** Required. The action id of the plugin to execute. */
  actionId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1ActionExecutionDetailSchema: Schema<GoogleCloudApihubV1ActionExecutionDetail> =
  s.object<GoogleCloudApihubV1ActionExecutionDetail>(
    {
      actionId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
