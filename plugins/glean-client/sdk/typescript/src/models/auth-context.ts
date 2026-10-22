import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Context for authentication responses, containing identifiers for the entity being authenticated.
 */
export type AuthContext = {
  /** ID of the MCP server (populated when toolType is MCP). */
  serverId?: string;
};

export const authContextSchema: Schema<AuthContext> = s.object<AuthContext>({
  serverId: s.optional(s.string()),
});
