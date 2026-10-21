import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PackUpgradeRequest = {
  /**
   * If <code>true</code> or omitted, allow the Pack to use custom JavaScript functions. If
   * <code>false</code>, reject Packs that use custom JavaScript functions.
   */
  allowCustomFunctions?: boolean;
  /**
   * If <code>true</code>, allow the upgrade to install a minor (non-breaking) version. Otherwise,
   * <code>false</code>.
   */
  minor?: boolean;
  /**
   * Source of the upgraded Pack. Use the <code>source</code> value returned by <code>PUT
   * /packs</code> for an uploaded file, or provide a direct URL to a <code>.crbl</code> file or a
   * <code>git+&lt;repo-url&gt;</code> Git repository URL.
   */
  source: string;
  /** Semver range constraint to apply when resolving the Pack version to install. */
  spec?: string;
};

export const packUpgradeRequestSchema: Schema<PackUpgradeRequest> = s.object<PackUpgradeRequest>({
  allowCustomFunctions: s.optional(s.boolean()),
  minor: s.optional(s.boolean()),
  source: s.string(),
  spec: s.optional(s.string()),
});
