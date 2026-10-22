import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ViewPatch = {
  /** Human-readable name for the view */
  name?: string;
  /** Optional detailed description of the view */
  description?: string;
  /** Whether to generate SDK keys for this view */
  generateSdkKeys?: boolean;
  /**
   * Member ID of the maintainer for this view. Only one of `maintainerId` or `maintainerTeamKey`
   * can be specified.
   */
  maintainerId?: string;
  /**
   * Key of the maintainer team for this view. Only one of `maintainerId` or `maintainerTeamKey` can
   * be specified.
   */
  maintainerTeamKey?: string;
  /** Tags associated with this view */
  tags?: string[];
  /** Whether or not the view is archived */
  archived?: boolean;
};

export const viewPatchSchema: Schema<ViewPatch> = s.object<ViewPatch>({
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  generateSdkKeys: s.optional(s.boolean()),
  maintainerId: s.optional(s.string()),
  maintainerTeamKey: s.optional(s.string()),
  tags: s.optional(s.array(s.string())),
  archived: s.optional(s.boolean()),
});
