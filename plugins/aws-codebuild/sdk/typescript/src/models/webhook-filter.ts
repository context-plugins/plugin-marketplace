import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { type8Schema, type Type8 } from "./type8.js";

export type WebhookFilter = {
  /**
   * The type of webhook filter. There are 11 webhook filter types: EVENT, ACTOR_ACCOUNT_ID,
   * HEAD_REF, BASE_REF, FILE_PATH, COMMIT_MESSAGE, TAG_NAME, RELEASE_NAME, REPOSITORY_NAME,
   * ORGANIZATION_NAME, and WORKFLOW_NAME. EVENT A webhook event triggers a build when the provided
   * pattern matches one of nine event types: PUSH, PULL_REQUEST_CREATED, PULL_REQUEST_UPDATED,
   * PULL_REQUEST_CLOSED, PULL_REQUEST_REOPENED, PULL_REQUEST_MERGED, RELEASED, PRERELEASED, and
   * WORKFLOW_JOB_QUEUED. The EVENT patterns are specified as a comma-separated string. For example,
   * PUSH, PULL_REQUEST_CREATED, PULL_REQUEST_UPDATED f
   */
  type: Type8;
  /**
   * For a WebHookFilter that uses EVENT type, a comma-separated string that specifies one or more
   * events. For example, the webhook filter PUSH, PULL_REQUEST_CREATED, PULL_REQUEST_UPDATED allows
   * all push, pull request created, and pull request updated events to trigger a build. For a
   * WebHookFilter that uses any of the other filter types, a regular expression pattern. For
   * example, a WebHookFilter that uses HEAD_REF for its type and the pattern ^refs/heads/ triggers
   * a build when the head reference is a branch with a reference name refs/heads/branch-name.
   */
  pattern: string;
  /**
   * Used to indicate that the pattern determines which webhook events do not trigger a build. If
   * true, then a webhook event that does not match the pattern triggers a build. If false, then a
   * webhook event that matches the pattern triggers a build.
   */
  excludeMatchedPattern?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const webhookFilterSchema: Schema<WebhookFilter> = s.object<WebhookFilter>(
  {
    type: type8Schema,
    pattern: s.string(),
    excludeMatchedPattern: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
