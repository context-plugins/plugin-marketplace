import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { outcomeSchema, type Outcome } from "./outcome.js";
import { sourceIndexStatusSchema, type SourceIndexStatus } from "./source-index-status.js";
import { branchSchema, type Branch } from "./unions/branch.js";
import { contentDigestSchema, type ContentDigest } from "./unions/content-digest.js";
import { digestSchema, type Digest } from "./unions/digest.js";
import { durationSecondsSchema, type DurationSeconds } from "./unions/duration-seconds.js";
import { errorMessageSchema, type ErrorMessage } from "./unions/error-message.js";
import { githubUrlSchema, type GithubUrl } from "./unions/github-url.js";
import { imageNameSchema, type ImageName } from "./unions/image-name.js";
import { lockInternalSchema, lockSchema, type Lock } from "./unions/lock.js";
import { manifestSchema, type Manifest } from "./unions/manifest.js";
import { runtimeConfigSchema, type RuntimeConfig } from "./unions/runtime-config.js";
import { scenarioCountSchema, type ScenarioCount } from "./unions/scenario-count.js";
import { sourceIndexErrorSchema, type SourceIndexError } from "./unions/source-index-error.js";
import { sourceIndexStartedAtSchema, type SourceIndexStartedAt } from "./unions/source-index-started-at.js";
import { sourceIndexedAtSchema, type SourceIndexedAt } from "./unions/source-indexed-at.js";
import { updatedAtSchema, type UpdatedAt } from "./unions/updated-at.js";
import { uriSchema, type Uri } from "./unions/uri.js";
import { userNameSchema, type UserName } from "./unions/user-name.js";
import { versionSchema, type Version } from "./unions/version.js";

/** A registered build and whether this request created it. */
export type BuildRegisterResponse = {
  id: string;
  registryId: string;
  status: string;
  sdkGeneration: string;
  version?: Version;
  uri?: Uri;
  imageName?: ImageName;
  digest?: Digest;
  contentDigest?: ContentDigest;
  lock?: Lock;
  manifest?: Manifest;
  durationSeconds?: DurationSeconds;
  errorMessage?: ErrorMessage;
  runtimeConfig?: RuntimeConfig;
  sourceIndexStatus: SourceIndexStatus;
  sourceIndexError?: SourceIndexError;
  sourceIndexStartedAt?: SourceIndexStartedAt;
  sourceIndexedAt?: SourceIndexedAt;
  createdAt: Date;
  updatedAt?: UpdatedAt;
  branch?: Branch;
  githubUrl?: GithubUrl;
  userName?: UserName;
  scenarioCount?: ScenarioCount;
  outcome: Outcome;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const buildRegisterResponseProperties: s.Shape<BuildRegisterResponse> = {
  id: s.string(),
  registryId: s.string(),
  status: s.string(),
  sdkGeneration: s.string(),
  version: s.optional(s.lazy(() => versionSchema)),
  uri: s.optional(s.lazy(() => uriSchema)),
  imageName: s.optional(s.lazy(() => imageNameSchema)),
  digest: s.optional(s.lazy(() => digestSchema)),
  contentDigest: s.optional(s.lazy(() => contentDigestSchema)),
  lock: s.optional(s.lazy(() => lockInternalSchema)),
  manifest: s.optional(s.lazy(() => manifestSchema)),
  durationSeconds: s.optional(s.lazy(() => durationSecondsSchema)),
  errorMessage: s.optional(s.lazy(() => errorMessageSchema)),
  runtimeConfig: s.optional(s.lazy(() => runtimeConfigSchema)),
  sourceIndexStatus: sourceIndexStatusSchema,
  sourceIndexError: s.optional(s.lazy(() => sourceIndexErrorSchema)),
  sourceIndexStartedAt: s.optional(s.lazy(() => sourceIndexStartedAtSchema)),
  sourceIndexedAt: s.optional(s.lazy(() => sourceIndexedAtSchema)),
  createdAt: s.dateTime(),
  updatedAt: s.optional(s.lazy(() => updatedAtSchema)),
  branch: s.optional(s.lazy(() => branchSchema)),
  githubUrl: s.optional(s.lazy(() => githubUrlSchema)),
  userName: s.optional(s.lazy(() => userNameSchema)),
  scenarioCount: s.optional(s.lazy(() => scenarioCountSchema)),
  outcome: outcomeSchema,
  _keysMap: {
    registryId: "registry_id",
    sdkGeneration: "sdk_generation",
    imageName: "image_name",
    contentDigest: "content_digest",
    durationSeconds: "duration_seconds",
    errorMessage: "error_message",
    runtimeConfig: "runtime_config",
    sourceIndexStatus: "source_index_status",
    sourceIndexError: "source_index_error",
    sourceIndexStartedAt: "source_index_started_at",
    sourceIndexedAt: "source_indexed_at",
    createdAt: "created_at",
    updatedAt: "updated_at",
    githubUrl: "github_url",
    userName: "user_name",
    scenarioCount: "scenario_count",
  },
};

export const buildRegisterResponseInternalSchema: Schema<BuildRegisterResponse> =
  s.object<BuildRegisterResponse>(buildRegisterResponseProperties, { additionalProperties: s.json() });

export const buildRegisterResponseSchema: Schema<BuildRegisterResponse> = s.lazySchema(() =>
  s.object<BuildRegisterResponse>(
    {
      ...buildRegisterResponseProperties,
      lock: s.optional(s.lazy(() => lockSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
