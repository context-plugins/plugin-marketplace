import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AddPermissionRequest = {
  /**
   * The URL of the Amazon SQS queue to which permissions are added. Queue URLs and names are
   * case-sensitive.
   */
  queueUrl: string;
  /**
   * The unique identification of the permission you're setting (for example, AliceSendMessage).
   * Maximum 80 characters. Allowed characters include alphanumeric characters, hyphens (-), and
   * underscores (_).
   */
  label: string;
  /**
   * The Amazon Web Services account numbers of the principals who are to receive permission. For
   * information about locating the Amazon Web Services account identification, see Your Amazon Web
   * Services Identifiers in the Amazon SQS Developer Guide.
   */
  awsAccountIds: string[];
  /**
   * The action the client wants to allow for the specified principal. Valid values: the name of any
   * action or *. For more information about these actions, see Overview of Managing Access
   * Permissions to Your Amazon Simple Queue Service Resource in the Amazon SQS Developer Guide.
   * Specifying SendMessage, DeleteMessage, or ChangeMessageVisibility for ActionName.n also grants
   * permissions for the corresponding batch versions of those actions: SendMessageBatch,
   * DeleteMessageBatch, and ChangeMessageVisibilityBatch.
   */
  actions: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const addPermissionRequestSchema: Schema<AddPermissionRequest> = s.object<AddPermissionRequest>(
  {
    queueUrl: s.string(),
    label: s.string(),
    awsAccountIds: s.array(s.string()),
    actions: s.array(s.string()),
    _keysMap: {
      queueUrl: "QueueUrl",
      label: "Label",
      awsAccountIds: "AWSAccountIds",
      actions: "Actions",
    },
  },
  { additionalProperties: s.json() },
);
