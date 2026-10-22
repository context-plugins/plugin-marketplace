import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authSchema, type Auth } from "./auth.js";
import {
  connectorDocumentationLinkSchema,
  type ConnectorDocumentationLink,
} from "./connector-documentation-link.js";
import { filters4Schema, type Filters4 } from "./filters4.js";
import { syncSchema, type Sync } from "./sync.js";

/**
 * Configuration form for a connector type: the auth fields per auth type, the sync strategies and
 * settings, and the sync and indexing filters.
 */
export type ConnectorSchema = {
  iconPath?: string;
  supportsRealtime?: boolean;
  supportsSync?: boolean;
  supportsAgent?: boolean;
  hideConnector?: boolean;
  permissionModel?: string;
  isAdminAccessRequired?: boolean;
  personalConnectorType?: string | null;
  /** Whether POST /connectors/registry/{connectorType}/test-connection works for this type */
  supportsConnectionCheck?: boolean;
  documentationLinks?: ConnectorDocumentationLink[];
  auth?: Auth;
  sync?: Sync;
  filters?: Filters4;
};

export const connectorSchemaSchema: Schema<ConnectorSchema> = s.object<ConnectorSchema>({
  iconPath: s.optional(s.string()),
  supportsRealtime: s.optional(s.boolean()),
  supportsSync: s.optional(s.boolean()),
  supportsAgent: s.optional(s.boolean()),
  hideConnector: s.optional(s.boolean()),
  permissionModel: s.optional(s.string()),
  isAdminAccessRequired: s.optional(s.boolean()),
  personalConnectorType: s.optionalNullable(s.string()),
  supportsConnectionCheck: s.optional(s.boolean()),
  documentationLinks: s.optional(s.array(s.lazy(() => connectorDocumentationLinkSchema))),
  auth: s.optional(s.lazy(() => authSchema)),
  sync: s.optional(s.lazy(() => syncSchema)),
  filters: s.optional(s.lazy(() => filters4Schema)),
});
