import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { configSchema, type Config } from "./config.js";
import { connectorAuthTypeSchema, type ConnectorAuthType } from "./connector-auth-type.js";
import { connectorScopeSchema, type ConnectorScope } from "./connector-scope.js";

export type CreateConnectorRequest = {
  /** `type` from the registry */
  connectorType: string;
  instanceName: string;
  /**
   * Scope determines visibility and access control for connectors:<br> <ul> <li><code>team</code> -
   * Available to all users in the organization (admin-only creation)</li> <li><code>personal</code>
   * - Private to the creating user only</li> </ul>
   */
  scope: ConnectorScope;
  /** One of the type's `supportedAuthTypes`; defaults to the first */
  authType?: ConnectorAuthType;
  config?: Config;
  /**
   * Origin of the page the OAuth provider redirects back to. The redirect URI is
   * `{baseUrl}/{redirectUri}`; defaults to the PipesHub frontend URL.
   */
  baseUrl?: string;
};

export const createConnectorRequestSchema: Schema<CreateConnectorRequest> = s.object<CreateConnectorRequest>({
  connectorType: s.string(),
  instanceName: s.string(),
  scope: connectorScopeSchema,
  authType: s.optional(s.lazy(() => connectorAuthTypeSchema)),
  config: s.optional(s.lazy(() => configSchema)),
  baseUrl: s.optional(s.string()),
});
