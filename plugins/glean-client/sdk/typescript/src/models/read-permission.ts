import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scopeTypeSchema, type ScopeType } from "./scope-type.js";

/** Describes the read permission level that a user has for a specific feature */
export type ReadPermission = {
  /** Describes the scope for a ReadPermission, WritePermission, or GrantPermission object */
  scopeType?: ScopeType;
};

export const readPermissionSchema: Schema<ReadPermission> = s.object<ReadPermission>({
  scopeType: s.optional(s.lazy(() => scopeTypeSchema)),
});
