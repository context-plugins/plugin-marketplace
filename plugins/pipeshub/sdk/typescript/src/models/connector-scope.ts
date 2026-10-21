import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Scope determines visibility and access control for connectors:<br> <ul> <li><code>team</code> -
 * Available to all users in the organization (admin-only creation)</li> <li><code>personal</code> -
 * Private to the creating user only</li> </ul>
 */
export const ConnectorScope = {
  Team: "team",
  Personal: "personal",
} as const;
export type ConnectorScope = (typeof ConnectorScope)[keyof typeof ConnectorScope] | (string & {});

export const connectorScopeSchema: EnumSchema<ConnectorScope> = s.enumOf<ConnectorScope>(ConnectorScope);
