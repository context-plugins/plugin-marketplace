import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { resourcePolicySchema, type ResourcePolicy } from "./resource-policy.js";

export type TeamAccessControlList = {
  /** List of resource policies that define the access permissions for this team. */
  perms: ResourcePolicy[];
  /** Name of the team whose access control entries are listed. */
  team: string;
};

export const teamAccessControlListSchema: Schema<TeamAccessControlList> = s.object<TeamAccessControlList>({
  perms: s.array(s.lazy(() => resourcePolicySchema)),
  team: s.string(),
});
