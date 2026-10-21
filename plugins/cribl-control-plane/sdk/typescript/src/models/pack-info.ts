import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  tagsTypePackInstallInfoSchema,
  type TagsTypePackInstallInfo,
} from "./tags-type-pack-install-info.js";

export type PackInfo = {
  /**
   * Fleet or group id this entity was inherited from when served by a Config Helper for a child
   * fleet. Present when inherited from parent, including when the child has a local overlay.
   * Omitted when the entity is local and not inherited. Display-only; never persisted.
   */
  srcGroup?: string;
  /**
   * If true, the child fleet has a local overlay on an inherited entity. Omitted when inherited and
   * unmodified, or when local and not inherited. Display-only; never persisted.
   */
  srcOverridden?: boolean;
  /** Name or identifier of the Pack author. */
  author?: string;
  /** Number of Collectors (saved jobs) configured within the Pack. */
  collectors?: number;
  /** Map of Pack dependency identifiers to their version constraints. */
  dependencies?: Record<string, string>;
  /** Brief description of the Pack and its purpose. */
  description?: string;
  /** Human-readable display name for the Pack. */
  displayName?: string;
  /** List of entity IDs exported by this Pack and available for use outside the Pack context. */
  exports?: string[];
  /** Unique identifier. */
  id: string;
  /** Number of Sources configured within the Pack. */
  inputs?: number;
  /** If <code>true</code>, the Pack is disabled. Otherwise, <code>false</code>. */
  isDisabled?: boolean;
  /** Minimum version of Cribl Stream required to run this Pack. */
  minLogStreamVersion?: string;
  /** Number of Destinations configured within the Pack. */
  outputs?: number;
  /** Pack-specific settings object. Contents vary by Pack. */
  settings?: Record<string, unknown>;
  /** Source of the Pack — a file path, URL, or Git URL from which the Pack was installed. */
  source: string;
  /** Semver range constraint that was applied when the Pack was installed. */
  spec?: string;
  /** Categorization tags for the Pack. */
  tags?: TagsTypePackInstallInfo;
  /** Version of the Pack, following semantic versioning. */
  version?: string;
};

export const packInfoSchema: Schema<PackInfo> = s.object<PackInfo>({
  srcGroup: s.optional(s.string()),
  srcOverridden: s.optional(s.boolean()),
  author: s.optional(s.string()),
  collectors: s.optional(s.float64()),
  dependencies: s.optional(s.record(s.string(), s.string())),
  description: s.optional(s.string()),
  displayName: s.optional(s.string()),
  exports: s.optional(s.array(s.string())),
  id: s.string(),
  inputs: s.optional(s.float64()),
  isDisabled: s.optional(s.boolean()),
  minLogStreamVersion: s.optional(s.string()),
  outputs: s.optional(s.float64()),
  settings: s.optional(s.record(s.string(), s.unknown())),
  source: s.string(),
  spec: s.optional(s.string()),
  tags: s.optional(s.lazy(() => tagsTypePackInstallInfoSchema)),
  version: s.optional(s.string()),
  _keysMap: {
    srcGroup: "__srcGroup",
    srcOverridden: "__srcOverridden",
  },
});
