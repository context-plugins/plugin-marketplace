import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pullRequestInternalSchema, pullRequestSchema, type PullRequest } from "./pull-request.js";

/**
 * Branch refers to a VCS branch. Branches are feature branches associated with Shortcut Stories.
 */
export type Branch = {
  /** A string description of this resource. */
  entityType: string;
  /** A true/false boolean indicating if the Branch has been deleted. */
  deleted: boolean;
  /** The name of the Branch. */
  name: string;
  /** This field is deprecated, and will always be false. */
  persistent: boolean;
  /** The time/date the Branch was updated. */
  updatedAt: Date | null;
  /** An array of PullRequests attached to the Branch (there is usually only one). */
  pullRequests: PullRequest[];
  /** The IDs of the Branches the Branch has been merged into. */
  mergedBranchIds: number[];
  /** The unique ID of the Branch. */
  id: number | null;
  /** The URL of the Branch. */
  url: string;
  /** The ID of the Repository that contains the Branch. */
  repositoryId: number;
  /** The time/date the Branch was created. */
  createdAt: Date | null;
};

const branchProperties: s.Shape<Branch> = {
  entityType: s.string(),
  deleted: s.boolean(),
  name: s.string(),
  persistent: s.boolean(),
  updatedAt: s.nullable(s.dateTime()),
  pullRequests: s.array(s.lazy(() => pullRequestInternalSchema)),
  mergedBranchIds: s.array(s.int()),
  id: s.nullable(s.int()),
  url: s.string(),
  repositoryId: s.int(),
  createdAt: s.nullable(s.dateTime()),
  _keysMap: {
    entityType: "entity_type",
    updatedAt: "updated_at",
    pullRequests: "pull_requests",
    mergedBranchIds: "merged_branch_ids",
    repositoryId: "repository_id",
    createdAt: "created_at",
  },
};

export const branchInternalSchema: Schema<Branch> = s.object<Branch>(branchProperties);

export const branchSchema: Schema<Branch> = s.lazySchema(() =>
  s.object<Branch>({
    ...branchProperties,
    pullRequests: s.array(s.lazy(() => pullRequestSchema)),
  }),
);
