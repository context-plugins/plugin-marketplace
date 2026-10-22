import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { actionSetSchema, type ActionSet } from "./action-set.js";

export type PermissionGrantInput = {
  /**
   * A group of related actions to allow. Specify either <code>actionSet</code> or
   * <code>actions</code>. Use <code>maintainTeam</code> to add team maintainers.
   */
  actionSet?: ActionSet;
  /**
   * A list of actions to allow. Specify either <code>actionSet</code> or <code>actions</code>. To
   * learn more, read [Role
   * actions](https://launchdarkly.com/docs/ld-docs/home/account/role-actions).
   */
  actions?: string[];
  /** A list of member IDs who receive the permission grant. */
  memberIDs?: string[];
};

export const permissionGrantInputSchema: Schema<PermissionGrantInput> = s.object<PermissionGrantInput>({
  actionSet: s.optional(s.lazy(() => actionSetSchema)),
  actions: s.optional(s.array(s.string())),
  memberIDs: s.optional(s.array(s.string())),
});
