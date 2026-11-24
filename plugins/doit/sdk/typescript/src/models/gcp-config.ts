import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customRoleSchema, type CustomRole } from "./custom-role.js";
import { levelSchema, type Level } from "./level.js";

export type GcpConfig = {
  organizationId?: string;
  folderId?: string;
  projectId?: string;
  level?: Level;
  serviceAccountName?: string;
  predefinedRoles?: string[];
  customRole?: CustomRole;
  infraManagerProject?: string;
  infraManagerLocation?: string;
  infraManagerServiceAccount?: string;
  /** Server-managed GCP config status. */
  status?: string;
  /** Generated deployment command. */
  deploymentCommand?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const gcpConfigSchema: Schema<GcpConfig> = s.object<GcpConfig>(
  {
    organizationId: s.optional(s.string()),
    folderId: s.optional(s.string()),
    projectId: s.optional(s.string()),
    level: s.optional(s.lazy(() => levelSchema)),
    serviceAccountName: s.optional(s.string()),
    predefinedRoles: s.optional(s.array(s.string())),
    customRole: s.optional(s.lazy(() => customRoleSchema)),
    infraManagerProject: s.optional(s.string()),
    infraManagerLocation: s.optional(s.string()),
    infraManagerServiceAccount: s.optional(s.string()),
    status: s.optional(s.string()),
    deploymentCommand: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
