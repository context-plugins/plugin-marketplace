import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connectorAuthTypeSchema, type ConnectorAuthType } from "./connector-auth-type.js";
import {
  connectorDocumentationLinkSchema,
  type ConnectorDocumentationLink,
} from "./connector-documentation-link.js";
import { connectorScopeSchema, type ConnectorScope } from "./connector-scope.js";

/** A connector type the org can add. */
export type ConnectorRegistryEntry = {
  /** Display name */
  name?: string;
  /** Connector type: the value to pass as `connectorType` */
  type?: string;
  appGroup?: string;
  supportedAuthTypes?: ConnectorAuthType[];
  appDescription?: string;
  appCategories?: string[];
  iconPath?: string;
  supportsRealtime?: boolean;
  supportsSync?: boolean;
  supportsAgent?: boolean;
  documentationLinks?: ConnectorDocumentationLink[];
  isAdminAccessRequired?: boolean;
  /** For a team connector type, its personal counterpart, if any */
  personalConnectorType?: string | null;
  /** Guidance shown before setup */
  connectorInfo?: string | null;
  /**
   * Scope determines visibility and access control for connectors:<br> <ul> <li><code>team</code> -
   * Available to all users in the organization (admin-only creation)</li> <li><code>personal</code>
   * - Private to the creating user only</li> </ul>
   */
  scope?: ConnectorScope;
};

export const connectorRegistryEntrySchema: Schema<ConnectorRegistryEntry> = s.object<ConnectorRegistryEntry>({
  name: s.optional(s.string()),
  type: s.optional(s.string()),
  appGroup: s.optional(s.string()),
  supportedAuthTypes: s.optional(s.array(s.lazy(() => connectorAuthTypeSchema))),
  appDescription: s.optional(s.string()),
  appCategories: s.optional(s.array(s.string())),
  iconPath: s.optional(s.string()),
  supportsRealtime: s.optional(s.boolean()),
  supportsSync: s.optional(s.boolean()),
  supportsAgent: s.optional(s.boolean()),
  documentationLinks: s.optional(s.array(s.lazy(() => connectorDocumentationLinkSchema))),
  isAdminAccessRequired: s.optional(s.boolean()),
  personalConnectorType: s.optionalNullable(s.string()),
  connectorInfo: s.optionalNullable(s.string()),
  scope: s.optional(s.lazy(() => connectorScopeSchema)),
});
