import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { branchSchema, type Branch } from "./unions/branch.js";
import { buildArgsSchema, type BuildArgs } from "./unions/build-args.js";
import { descriptionSchema, type Description } from "./unions/description.js";
import { entryFolderSchema, type EntryFolder } from "./unions/entry-folder.js";
import { exampleTraceIdSchema, type ExampleTraceId } from "./unions/example-trace-id.js";
import { featuredSourceSchema, type FeaturedSource } from "./unions/featured-source.js";
import { githubUrlSchema, type GithubUrl } from "./unions/github-url.js";
import { latestBuildIdSchema, type LatestBuildId } from "./unions/latest-build-id.js";
import { latestBuildSchema, type LatestBuild } from "./unions/latest-build.js";
import { latestScenariosSchema, type LatestScenarios } from "./unions/latest-scenarios.js";
import { originSchema, type Origin } from "./unions/origin.js";
import { ownerAvatarUrlSchema, type OwnerAvatarUrl } from "./unions/owner-avatar-url.js";
import { ownerNameSchema, type OwnerName } from "./unions/owner-name.js";
import { projectIdSchema, type ProjectId } from "./unions/project-id.js";
import { sourceBuildIdSchema, type SourceBuildId } from "./unions/source-build-id.js";
import { teamNameSchema, type TeamName } from "./unions/team-name.js";

export type RegistryDetailResponse = {
  id: string;
  name: string;
  registryType: string;
  projectId: ProjectId;
  public: boolean;
  featured: boolean;
  sourcePublic: boolean;
  description?: Description;
  latestBuildId?: LatestBuildId;
  githubUrl?: GithubUrl;
  branch?: Branch;
  entryFolder?: EntryFolder;
  buildArgs?: BuildArgs;
  instanceConfig?: Record<string, unknown>;
  /** @default 0 */
  starCount?: number;
  origin?: Origin;
  createdAt: Date;
  updatedAt: Date;
  latestBuild?: LatestBuild;
  sourceBuildId?: SourceBuildId;
  /** @default false */
  isStarred?: boolean;
  /** @default false */
  isOwner?: boolean;
  /** @default false */
  canEdit?: boolean;
  /** @default false */
  canManage?: boolean;
  ownerName?: OwnerName;
  ownerAvatarUrl?: OwnerAvatarUrl;
  teamName?: TeamName;
  /** @default 0 */
  scenarioCount?: number;
  latestScenarios?: LatestScenarios;
  exampleTraceId?: ExampleTraceId;
  featuredSource?: FeaturedSource;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const registryDetailResponseSchema: Schema<RegistryDetailResponse> = s.object<RegistryDetailResponse>(
  {
    id: s.string(),
    name: s.string(),
    registryType: s.string(),
    projectId: projectIdSchema,
    public: s.boolean(),
    featured: s.boolean(),
    sourcePublic: s.boolean(),
    description: s.optional(s.lazy(() => descriptionSchema)),
    latestBuildId: s.optional(s.lazy(() => latestBuildIdSchema)),
    githubUrl: s.optional(s.lazy(() => githubUrlSchema)),
    branch: s.optional(s.lazy(() => branchSchema)),
    entryFolder: s.optional(s.lazy(() => entryFolderSchema)),
    buildArgs: s.optional(s.lazy(() => buildArgsSchema)),
    instanceConfig: s.optional(s.record(s.string(), s.unknown())),
    starCount: s.defaulted(s.int(), 0),
    origin: s.optional(s.lazy(() => originSchema)),
    createdAt: s.dateTime(),
    updatedAt: s.dateTime(),
    latestBuild: s.optional(s.lazy(() => latestBuildSchema)),
    sourceBuildId: s.optional(s.lazy(() => sourceBuildIdSchema)),
    isStarred: s.defaulted(s.boolean(), false),
    isOwner: s.defaulted(s.boolean(), false),
    canEdit: s.defaulted(s.boolean(), false),
    canManage: s.defaulted(s.boolean(), false),
    ownerName: s.optional(s.lazy(() => ownerNameSchema)),
    ownerAvatarUrl: s.optional(s.lazy(() => ownerAvatarUrlSchema)),
    teamName: s.optional(s.lazy(() => teamNameSchema)),
    scenarioCount: s.defaulted(s.int(), 0),
    latestScenarios: s.optional(s.lazy(() => latestScenariosSchema)),
    exampleTraceId: s.optional(s.lazy(() => exampleTraceIdSchema)),
    featuredSource: s.optional(s.lazy(() => featuredSourceSchema)),
    _keysMap: {
      registryType: "registry_type",
      projectId: "project_id",
      sourcePublic: "source_public",
      latestBuildId: "latest_build_id",
      githubUrl: "github_url",
      entryFolder: "entry_folder",
      buildArgs: "build_args",
      instanceConfig: "instance_config",
      starCount: "star_count",
      createdAt: "created_at",
      updatedAt: "updated_at",
      latestBuild: "latest_build",
      sourceBuildId: "source_build_id",
      isStarred: "is_starred",
      isOwner: "is_owner",
      canEdit: "can_edit",
      canManage: "can_manage",
      ownerName: "owner_name",
      ownerAvatarUrl: "owner_avatar_url",
      teamName: "team_name",
      scenarioCount: "scenario_count",
      latestScenarios: "latest_scenarios",
      exampleTraceId: "example_trace_id",
      featuredSource: "featured_source",
    },
  },
  { additionalProperties: s.json() },
);
