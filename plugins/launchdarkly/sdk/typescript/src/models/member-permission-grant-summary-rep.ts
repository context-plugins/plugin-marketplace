import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MemberPermissionGrantSummaryRep = {
  /**
   * The name of the group of related actions to allow. A permission grant may have either an
   * <code>actionSet</code> or a list of <code>actions</code> but not both at the same time.
   */
  actionSet?: string;
  /**
   * A list of actions to allow. A permission grant may have either an <code>actionSet</code> or a
   * list of <code>actions</code> but not both at the same time.
   */
  actions?: string[];
  /** The resource for which the actions are allowed */
  resource: string;
};

export const memberPermissionGrantSummaryRepSchema: Schema<MemberPermissionGrantSummaryRep> =
  s.object<MemberPermissionGrantSummaryRep>({
    actionSet: s.optional(s.string()),
    actions: s.optional(s.array(s.string())),
    resource: s.string(),
  });
