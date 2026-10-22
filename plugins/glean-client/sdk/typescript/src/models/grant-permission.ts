import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scopeTypeSchema, type ScopeType } from "./scope-type.js";

/** Describes the grant permission level that a user has for a specific feature */
export type GrantPermission = {
  /** Describes the scope for a ReadPermission, WritePermission, or GrantPermission object */
  scopeType?: ScopeType;
};

export const grantPermissionSchema: Schema<GrantPermission> = s.object<GrantPermission>({
  scopeType: s.optional(s.lazy(() => scopeTypeSchema)),
});
