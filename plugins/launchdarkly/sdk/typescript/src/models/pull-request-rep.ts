import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deploymentCollectionRepSchema, type DeploymentCollectionRep } from "./deployment-collection-rep.js";
import {
  flagReferenceCollectionRepSchema,
  type FlagReferenceCollectionRep,
} from "./flag-reference-collection-rep.js";
import { pullRequestLeadTimeRepSchema, type PullRequestLeadTimeRep } from "./pull-request-lead-time-rep.js";

export type PullRequestRep = {
  /** The pull request internal ID */
  id: string;
  /** The pull request number */
  externalId: string;
  /** The pull request title */
  title: string;
  /** The pull request status */
  status: string;
  /** The pull request author */
  author: string;
  createTime: number;
  mergeTime?: number;
  /** The pull request merge commit key */
  mergeCommitKey?: string;
  /** The pull request base commit key */
  baseCommitKey: string;
  /** The pull request head commit key */
  headCommitKey: string;
  /** The number of files changed */
  filesChanged: number;
  /** The number of lines added */
  linesAdded: number;
  /** The number of lines deleted */
  linesDeleted: number;
  /** The pull request URL */
  url: string;
  deployments?: DeploymentCollectionRep;
  flagReferences?: FlagReferenceCollectionRep;
  leadTime?: PullRequestLeadTimeRep;
};

export const pullRequestRepSchema: Schema<PullRequestRep> = s.object<PullRequestRep>({
  id: s.string(),
  externalId: s.string(),
  title: s.string(),
  status: s.string(),
  author: s.string(),
  createTime: s.int(),
  mergeTime: s.optional(s.int()),
  mergeCommitKey: s.optional(s.string()),
  baseCommitKey: s.string(),
  headCommitKey: s.string(),
  filesChanged: s.int(),
  linesAdded: s.int(),
  linesDeleted: s.int(),
  url: s.string(),
  deployments: s.optional(s.lazy(() => deploymentCollectionRepSchema)),
  flagReferences: s.optional(s.lazy(() => flagReferenceCollectionRepSchema)),
  leadTime: s.optional(s.lazy(() => pullRequestLeadTimeRepSchema)),
});
