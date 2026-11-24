import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { lifecycleSchema, type Lifecycle } from "./lifecycle.js";
import { nodeSchema, type Node } from "./node.js";
import { outcomeSchema, type Outcome } from "./outcome.js";
import { statusSchema, type Status } from "./status.js";
import { stepInternalSchema, stepSchema, type Step } from "./step.js";

export type BuildDetail = {
  /** The VCS URL */
  vcsUrl?: string;
  /** URL to view the build in CircleCI */
  buildUrl?: string;
  /** The build number */
  buildNum?: number;
  /** The branch that was built */
  branch?: string;
  /** The VCS revision (commit SHA) */
  vcsRevision?: string;
  /** Name of the committer */
  committerName?: string;
  /** Email of the committer */
  committerEmail?: string;
  /** The commit message subject */
  subject?: string;
  /** The commit message body */
  body?: string;
  /** Why the build was triggered */
  why?: string;
  /** The build status */
  status?: Status;
  /** The build outcome */
  outcome?: Outcome;
  /** When the build started */
  startTime?: Date;
  /** When the build stopped */
  stopTime?: Date;
  /** Total build time in milliseconds */
  buildTimeMillis?: number;
  /** When the build was queued */
  queuedAt?: Date;
  /** The build lifecycle phase */
  lifecycle?: Lifecycle;
  /** The organization or username */
  username?: string;
  /** The repository name */
  reponame?: string;
  /** Build steps */
  steps?: Step[];
  /** The parsed CircleCI configuration */
  circleYml?: Record<string, unknown>;
  /** Build messages */
  messages?: string[];
  /** Node information for SSH access */
  node?: Node[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const buildDetailProperties: s.Shape<BuildDetail> = {
  vcsUrl: s.optional(s.string()),
  buildUrl: s.optional(s.string()),
  buildNum: s.optional(s.int()),
  branch: s.optional(s.string()),
  vcsRevision: s.optional(s.string()),
  committerName: s.optional(s.string()),
  committerEmail: s.optional(s.string()),
  subject: s.optional(s.string()),
  body: s.optional(s.string()),
  why: s.optional(s.string()),
  status: s.optional(s.lazy(() => statusSchema)),
  outcome: s.optional(s.lazy(() => outcomeSchema)),
  startTime: s.optional(s.dateTime()),
  stopTime: s.optional(s.dateTime()),
  buildTimeMillis: s.optional(s.int()),
  queuedAt: s.optional(s.dateTime()),
  lifecycle: s.optional(s.lazy(() => lifecycleSchema)),
  username: s.optional(s.string()),
  reponame: s.optional(s.string()),
  steps: s.optional(s.array(s.lazy(() => stepInternalSchema))),
  circleYml: s.optional(s.record(s.string(), s.unknown())),
  messages: s.optional(s.array(s.string())),
  node: s.optional(s.array(s.lazy(() => nodeSchema))),
  _keysMap: {
    vcsUrl: "vcs_url",
    buildUrl: "build_url",
    buildNum: "build_num",
    vcsRevision: "vcs_revision",
    committerName: "committer_name",
    committerEmail: "committer_email",
    startTime: "start_time",
    stopTime: "stop_time",
    buildTimeMillis: "build_time_millis",
    queuedAt: "queued_at",
    circleYml: "circle_yml",
  },
};

export const buildDetailInternalSchema: Schema<BuildDetail> = s.object<BuildDetail>(buildDetailProperties, {
  additionalProperties: s.json(),
});

export const buildDetailSchema: Schema<BuildDetail> = s.lazySchema(() =>
  s.object<BuildDetail>(
    {
      ...buildDetailProperties,
      vcsUrl: s.optional(s.string().check(s.url())),
      buildUrl: s.optional(s.string().check(s.url())),
      committerEmail: s.optional(s.string().check(s.email())),
      steps: s.optional(s.array(s.lazy(() => stepSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
