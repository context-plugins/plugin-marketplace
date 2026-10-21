import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { rbacResource1Schema, type RbacResource1 } from "./rbac-resource1.js";

export type ResourcePolicy = {
  /** Unique identifier for the group that owns the resource. */
  gid: string;
  /** Unique identifier for the resource. Omitted for resource type <code>groups</code>. */
  id?: string;
  /** String that defines the access control policy for the resource. */
  policy: string;
  /** Resource type that the access control policy applies to. */
  type: RbacResource1;
};

export const resourcePolicySchema: Schema<ResourcePolicy> = s.object<ResourcePolicy>({
  gid: s.string(),
  id: s.optional(s.string()),
  policy: s.string(),
  type: rbacResource1Schema,
});
