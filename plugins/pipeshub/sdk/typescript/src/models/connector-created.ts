import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connectorScopeSchema, type ConnectorScope } from "./connector-scope.js";

export type ConnectorCreated = {
  connectorId: string;
  connectorType: string;
  instanceName: string;
  created?: boolean;
  /**
   * Scope determines visibility and access control for connectors:<br> <ul> <li><code>team</code> -
   * Available to all users in the organization (admin-only creation)</li> <li><code>personal</code>
   * - Private to the creating user only</li> </ul>
   */
  scope: ConnectorScope;
  createdBy?: string;
  isAuthenticated?: boolean;
  isConfigured?: boolean;
};

export const connectorCreatedSchema: Schema<ConnectorCreated> = s.object<ConnectorCreated>({
  connectorId: s.string(),
  connectorType: s.string(),
  instanceName: s.string(),
  created: s.optional(s.boolean()),
  scope: connectorScopeSchema,
  createdBy: s.optional(s.string()),
  isAuthenticated: s.optional(s.boolean()),
  isConfigured: s.optional(s.boolean()),
});
