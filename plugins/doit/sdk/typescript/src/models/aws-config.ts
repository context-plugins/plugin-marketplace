import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contextSchema, type Context } from "./context.js";

export type AwsConfig = {
  context?: Context[];
  roleName?: string;
  permissions?: Record<string, unknown>;
  managementAccount?: string;
  organizationRootId?: string;
  scopeTargetedOrganizationalUnitIds?: string[];
  scopeExplicitAccountIds?: string[];
  scopeExcludedAccountIds?: string[];
  scopeManagementAccountExplicitInScope?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const awsConfigSchema: Schema<AwsConfig> = s.object<AwsConfig>(
  {
    context: s.optional(s.array(s.lazy(() => contextSchema))),
    roleName: s.optional(s.string()),
    permissions: s.optional(s.record(s.string(), s.unknown())),
    managementAccount: s.optional(s.string()),
    organizationRootId: s.optional(s.string()),
    scopeTargetedOrganizationalUnitIds: s.optional(s.array(s.string())),
    scopeExplicitAccountIds: s.optional(s.array(s.string())),
    scopeExcludedAccountIds: s.optional(s.array(s.string())),
    scopeManagementAccountExplicitInScope: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
