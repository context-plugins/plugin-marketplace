import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The name of the build phase. Valid values include: BUILD Core build activities typically occur in
 * this build phase. COMPLETED The build has been completed. DOWNLOAD_SOURCE Source code is being
 * downloaded in this build phase. FINALIZING The build process is completing in this build phase.
 * INSTALL Installation activities typically occur in this build phase. POST_BUILD Post-build
 * activities typically occur in this build phase. PRE_BUILD Pre-build activities typically occur in
 * this build phase. PROVISIONING The build environment is being set up. QUEUED The build has been
 * submitted and is queued be
 */
export const PhaseType = {
  Submitted: "SUBMITTED",
  Queued: "QUEUED",
  Provisioning: "PROVISIONING",
  DownloadSource: "DOWNLOAD_SOURCE",
  Install: "INSTALL",
  PreBuild: "PRE_BUILD",
  Build: "BUILD",
  PostBuild: "POST_BUILD",
  UploadArtifacts: "UPLOAD_ARTIFACTS",
  Finalizing: "FINALIZING",
  Completed: "COMPLETED",
} as const;
export type PhaseType = (typeof PhaseType)[keyof typeof PhaseType] | (string & {});

export const phaseTypeSchema: EnumSchema<PhaseType> = s.enumOf<PhaseType>(PhaseType);
