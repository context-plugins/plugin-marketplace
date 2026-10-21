import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Provenance recorded on the staged commit or published version this import produces. Doesn't
 * change the agent's management mode (workflowSource). GIT: synced from a Git repository. USER:
 * uploaded by a user. Defaults to USER when omitted. Ignored for transient imports.
 */
export const VersionSource = {
  Git: "GIT",
  User: "USER",
} as const;
export type VersionSource = (typeof VersionSource)[keyof typeof VersionSource] | (string & {});

export const versionSourceSchema: EnumSchema<VersionSource> = s.enumOf<VersionSource>(VersionSource);
