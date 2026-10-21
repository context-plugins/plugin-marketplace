import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scopeTypeSchema, type ScopeType } from "./scope-type.js";

/** Describes the write permissions levels that a user has for a specific feature */
export type WritePermission = {
  /** Describes the scope for a ReadPermission, WritePermission, or GrantPermission object */
  scopeType?: ScopeType;
  /** True if user has create permission for this feature and scope */
  create?: boolean;
  /** True if user has update permission for this feature and scope */
  update?: boolean;
  /** True if user has delete permission for this feature and scope */
  delete?: boolean;
};

export const writePermissionSchema: Schema<WritePermission> = s.object<WritePermission>({
  scopeType: s.optional(s.lazy(() => scopeTypeSchema)),
  create: s.optional(s.boolean()),
  update: s.optional(s.boolean()),
  delete: s.optional(s.boolean()),
});
