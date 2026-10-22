import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connectorAuthTypeSchema, type ConnectorAuthType } from "./connector-auth-type.js";
import { connectorScopeSchema, type ConnectorScope } from "./connector-scope.js";

/** Auth fields for the instance's auth type, keyed by field name */
export type Auth1 = {
  /**
   * How a connector instance signs in to its source. Each connector type supports a subset; see
   * `supportedAuthTypes` in the registry.
   */
  authType?: ConnectorAuthType;
  connectorType?: string;
  /**
   * Scope determines visibility and access control for connectors:<br> <ul> <li><code>team</code> -
   * Available to all users in the organization (admin-only creation)</li> <li><code>personal</code>
   * - Private to the creating user only</li> </ul>
   */
  connectorScope?: ConnectorScope;
  /** The shared OAuth app the instance signs in with */
  oauthConfigId?: string;
  oauthInstanceName?: string;
  redirectUri?: string;
};

export const auth1Schema: Schema<Auth1> = s.object<Auth1>({
  authType: s.optional(s.lazy(() => connectorAuthTypeSchema)),
  connectorType: s.optional(s.string()),
  connectorScope: s.optional(s.lazy(() => connectorScopeSchema)),
  oauthConfigId: s.optional(s.string()),
  oauthInstanceName: s.optional(s.string()),
  redirectUri: s.optional(s.string()),
});
