import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  tagsTypePackInstallInfoSchema,
  type TagsTypePackInstallInfo,
} from "./tags-type-pack-install-info.js";

export type PackRequestBody = {
  /** Unique identifier for the Pack. */
  id: string;
  /** Semver range constraint to apply when resolving the Pack version to install. */
  spec?: string;
  /** Version of the Pack, following semantic versioning. */
  version?: string;
  /** Minimum version of Cribl Stream required to run this Pack. */
  minLogStreamVersion?: string;
  /** Human-readable display name for the Pack. */
  displayName?: string;
  /** Name or identifier of the Pack author. */
  author?: string;
  /** Brief description of the Pack and its purpose. */
  description?: string;
  /**
   * Where to install the Pack from: an uploaded Pack source, a direct URL to a .crbl file, or a Git
   * repository URL. Leave empty to create an empty Pack.
   */
  source?: string;
  /** Categorization tags for the Pack. */
  tags?: TagsTypePackInstallInfo;
  /**
   * Allow the Pack to use custom JavaScript functions. When disabled, Packs that use custom
   * JavaScript functions are rejected.
   */
  allowCustomFunctions?: boolean;
  /** Overwrite an existing Pack that has the same ID. */
  force?: boolean;
};

export const packRequestBodySchema: Schema<PackRequestBody> = s.object<PackRequestBody>({
  id: s.string(),
  spec: s.optional(s.string()),
  version: s.optional(s.string()),
  minLogStreamVersion: s.optional(s.string()),
  displayName: s.optional(s.string()),
  author: s.optional(s.string()),
  description: s.optional(s.string()),
  source: s.optional(s.string()),
  tags: s.optional(s.lazy(() => tagsTypePackInstallInfoSchema)),
  allowCustomFunctions: s.optional(s.boolean()),
  force: s.optional(s.boolean()),
});
