import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  flagReferenceCollectionRepSchema,
  type FlagReferenceCollectionRep,
} from "./flag-reference-collection-rep.js";
import { leadTimeStagesRepSchema, type LeadTimeStagesRep } from "./lead-time-stages-rep.js";
import {
  pullRequestCollectionRepSchema,
  type PullRequestCollectionRep,
} from "./pull-request-collection-rep.js";

export type DeploymentRep = {
  /** The deployment ID */
  id: string;
  /** The application key */
  applicationKey: string;
  /** The application version */
  applicationVersion: string;
  startedAt: number;
  endedAt?: number;
  /** The duration of the deployment in milliseconds */
  durationMs?: number;
  status: string;
  kind: string;
  /** Whether the deployment is active */
  active: boolean;
  /** The metadata associated with the deployment */
  metadata?: Record<string, Record<string, unknown>>;
  /** Whether the deployment is archived */
  archived: boolean;
  /** The environment key */
  environmentKey: string;
  /** The number of contributors */
  numberOfContributors: number;
  /** The number of pull requests */
  numberOfPullRequests: number;
  /** The number of lines added */
  linesAdded: number;
  /** The number of lines deleted */
  linesDeleted: number;
  /** The total lead time from first commit to deployment end in milliseconds */
  leadTime: number;
  pullRequests?: PullRequestCollectionRep;
  flagReferences?: FlagReferenceCollectionRep;
  leadTimeStages?: LeadTimeStagesRep;
};

export const deploymentRepSchema: Schema<DeploymentRep> = s.object<DeploymentRep>({
  id: s.string(),
  applicationKey: s.string(),
  applicationVersion: s.string(),
  startedAt: s.int(),
  endedAt: s.optional(s.int()),
  durationMs: s.optional(s.int()),
  status: s.string(),
  kind: s.string(),
  active: s.boolean(),
  metadata: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
  archived: s.boolean(),
  environmentKey: s.string(),
  numberOfContributors: s.int(),
  numberOfPullRequests: s.int(),
  linesAdded: s.int(),
  linesDeleted: s.int(),
  leadTime: s.int(),
  pullRequests: s.optional(s.lazy(() => pullRequestCollectionRepSchema)),
  flagReferences: s.optional(s.lazy(() => flagReferenceCollectionRepSchema)),
  leadTimeStages: s.optional(s.lazy(() => leadTimeStagesRepSchema)),
});
