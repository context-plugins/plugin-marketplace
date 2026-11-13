import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  pullRequestLabelInternalSchema,
  pullRequestLabelSchema,
  type PullRequestLabel,
} from "./pull-request-label.js";

/** Corresponds to a VCS Pull Request attached to a Shortcut story. */
export type PullRequest = {
  /** A string description of this resource. */
  entityType: string;
  /** True/False boolean indicating whether the VCS pull request has been closed. */
  closed: boolean;
  /** True/False boolean indicating whether the VCS pull request has been merged. */
  merged: boolean;
  /** Number of lines added in the pull request, according to VCS. */
  numAdded: number;
  /** The ID of the branch for the particular pull request. */
  branchId: number;
  /**
   * An array of Story ids that have Pull Requests that change at least one of the same lines this
   * Pull Request changes.
   */
  overlappingStories?: number[];
  /** The pull request's unique number ID in VCS. */
  number: number;
  /** The name of the branch for the particular pull request. */
  branchName: string;
  /** The name of the target branch for the particular pull request. */
  targetBranchName: string;
  /** The number of commits on the pull request. */
  numCommits: number | null;
  /** The title of the pull request. */
  title: string;
  /** The time/date the pull request was created. */
  updatedAt: Date;
  /**
   * Boolean indicating that the Pull Request has Stories that have Pull Requests that change at
   * least one of the same lines this Pull Request changes.
   */
  hasOverlappingStories: boolean;
  /** True/False boolean indicating whether the VCS pull request is in the draft state. */
  draft: boolean;
  /** The unique ID associated with the pull request in Shortcut. */
  id: number;
  /** An array of PullRequestLabels attached to the PullRequest. */
  vcsLabels?: PullRequestLabel[] | null;
  /** The URL for the pull request. */
  url: string;
  /** Number of lines removed in the pull request, according to VCS. */
  numRemoved: number;
  /** The status of the review for the pull request. */
  reviewStatus?: string;
  /** Number of lines modified in the pull request, according to VCS. */
  numModified: number | null;
  /** The status of the Continuous Integration workflow for the pull request. */
  buildStatus?: string;
  /** The ID of the target branch for the particular pull request. */
  targetBranchId: number;
  /** The ID of the repository for the particular pull request. */
  repositoryId: number;
  /** The time/date the pull request was created. */
  createdAt: Date;
};

const pullRequestProperties: s.Shape<PullRequest> = {
  entityType: s.string(),
  closed: s.boolean(),
  merged: s.boolean(),
  numAdded: s.int(),
  branchId: s.int(),
  overlappingStories: s.optional(s.array(s.int())),
  number: s.int(),
  branchName: s.string(),
  targetBranchName: s.string(),
  numCommits: s.nullable(s.int()),
  title: s.string(),
  updatedAt: s.dateTime(),
  hasOverlappingStories: s.boolean(),
  draft: s.boolean(),
  id: s.int(),
  vcsLabels: s.optionalNullable(s.array(s.lazy(() => pullRequestLabelInternalSchema))),
  url: s.string(),
  numRemoved: s.int(),
  reviewStatus: s.optional(s.string()),
  numModified: s.nullable(s.int()),
  buildStatus: s.optional(s.string()),
  targetBranchId: s.int(),
  repositoryId: s.int(),
  createdAt: s.dateTime(),
  _keysMap: {
    entityType: "entity_type",
    numAdded: "num_added",
    branchId: "branch_id",
    overlappingStories: "overlapping_stories",
    branchName: "branch_name",
    targetBranchName: "target_branch_name",
    numCommits: "num_commits",
    updatedAt: "updated_at",
    hasOverlappingStories: "has_overlapping_stories",
    vcsLabels: "vcs_labels",
    numRemoved: "num_removed",
    reviewStatus: "review_status",
    numModified: "num_modified",
    buildStatus: "build_status",
    targetBranchId: "target_branch_id",
    repositoryId: "repository_id",
    createdAt: "created_at",
  },
};

export const pullRequestInternalSchema: Schema<PullRequest> = s.object<PullRequest>(pullRequestProperties);

export const pullRequestSchema: Schema<PullRequest> = s.lazySchema(() =>
  s.object<PullRequest>({
    ...pullRequestProperties,
    vcsLabels: s.optionalNullable(s.array(s.lazy(() => pullRequestLabelSchema))),
  }),
);
