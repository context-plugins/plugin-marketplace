import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { resourcePolicySchema, type ResourcePolicy } from "./resource-policy.js";

export type UserAccessControlList = {
  /** List of resource policies that define the access permissions for this member. */
  perms: ResourcePolicy[];
  /** Username of the member whose access control entries are listed. */
  user: string;
};

export const userAccessControlListSchema: Schema<UserAccessControlList> = s.object<UserAccessControlList>({
  perms: s.array(s.lazy(() => resourcePolicySchema)),
  user: s.string(),
});
