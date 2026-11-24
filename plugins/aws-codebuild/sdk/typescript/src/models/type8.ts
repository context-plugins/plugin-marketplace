import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of webhook filter. There are 11 webhook filter types: EVENT, ACTOR_ACCOUNT_ID, HEAD_REF,
 * BASE_REF, FILE_PATH, COMMIT_MESSAGE, TAG_NAME, RELEASE_NAME, REPOSITORY_NAME, ORGANIZATION_NAME,
 * and WORKFLOW_NAME. EVENT A webhook event triggers a build when the provided pattern matches one
 * of nine event types: PUSH, PULL_REQUEST_CREATED, PULL_REQUEST_UPDATED, PULL_REQUEST_CLOSED,
 * PULL_REQUEST_REOPENED, PULL_REQUEST_MERGED, RELEASED, PRERELEASED, and WORKFLOW_JOB_QUEUED. The
 * EVENT patterns are specified as a comma-separated string. For example, PUSH,
 * PULL_REQUEST_CREATED, PULL_REQUEST_UPDATED f
 */
export const Type8 = {
  Event: "EVENT",
  BaseRef: "BASE_REF",
  HeadRef: "HEAD_REF",
  ActorAccountId: "ACTOR_ACCOUNT_ID",
  FilePath: "FILE_PATH",
  CommitMessage: "COMMIT_MESSAGE",
  WorkflowName: "WORKFLOW_NAME",
  TagName: "TAG_NAME",
  ReleaseName: "RELEASE_NAME",
  RepositoryName: "REPOSITORY_NAME",
  OrganizationName: "ORGANIZATION_NAME",
} as const;
export type Type8 = (typeof Type8)[keyof typeof Type8] | (string & {});

export const type8Schema: EnumSchema<Type8> = s.enumOf<Type8>(Type8);
