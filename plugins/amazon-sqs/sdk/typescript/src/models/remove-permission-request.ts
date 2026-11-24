import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RemovePermissionRequest = {
  /**
   * The URL of the Amazon SQS queue from which permissions are removed. Queue URLs and names are
   * case-sensitive.
   */
  queueUrl: string;
  /**
   * The identification of the permission to remove. This is the label added using the AddPermission
   * action.
   */
  label: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const removePermissionRequestSchema: Schema<RemovePermissionRequest> =
  s.object<RemovePermissionRequest>(
    {
      queueUrl: s.string(),
      label: s.string(),
      _keysMap: {
        queueUrl: "QueueUrl",
        label: "Label",
      },
    },
    { additionalProperties: s.json() },
  );
