import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Organization = {
  organization: string;
  githubAccountId: string;
  canViewBilling: boolean;
  canManageSeats: boolean;
  canManageRoles: boolean;
  canUpdateSubscription: boolean;
  canUpdateFlexCapacity: boolean;
};

export const organizationSchema: Schema<Organization> = s.object<Organization>({
  organization: s.string(),
  githubAccountId: s.string(),
  canViewBilling: s.boolean(),
  canManageSeats: s.boolean(),
  canManageRoles: s.boolean(),
  canUpdateSubscription: s.boolean(),
  canUpdateFlexCapacity: s.boolean(),
});
