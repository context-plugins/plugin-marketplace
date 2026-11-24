import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies the type of build this webhook will trigger. RUNNER_BUILDKITE_BUILD is only available
 * for NO_SOURCE source type projects configured for Buildkite runner builds. For more information
 * about CodeBuild-hosted Buildkite runner builds, see Tutorial: Configure a CodeBuild-hosted
 * Buildkite runner in the CodeBuild user guide.
 */
export const BuildType = {
  Build: "BUILD",
  BuildBatch: "BUILD_BATCH",
  RunnerBuildkiteBuild: "RUNNER_BUILDKITE_BUILD",
} as const;
export type BuildType = (typeof BuildType)[keyof typeof BuildType] | (string & {});

export const buildTypeSchema: EnumSchema<BuildType> = s.enumOf<BuildType>(BuildType);
