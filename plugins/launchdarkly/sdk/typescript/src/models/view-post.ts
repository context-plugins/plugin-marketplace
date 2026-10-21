import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ViewPost = {
  /** Unique key for the view within the account/project */
  key: string;
  /** Human-readable name for the view */
  name: string;
  /** Optional detailed description of the view */
  description?: string;
  /** Whether to generate SDK keys for this view @default false */
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
};

export const viewPostSchema: Schema<ViewPost> = s.object<ViewPost>({
  key: s.string(),
  name: s.string(),
  description: s.optional(s.string()),
  generateSdkKeys: s.defaulted(s.boolean(), false),
  maintainerId: s.optional(s.string()),
  maintainerTeamKey: s.optional(s.string()),
  tags: s.optional(s.array(s.string())),
});
