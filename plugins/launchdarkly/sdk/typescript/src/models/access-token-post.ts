import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { roleSchema, type Role } from "./role.js";
import { statementPostSchema, type StatementPost } from "./statement-post.js";

export type AccessTokenPost = {
  /** A human-friendly name for the access token */
  name?: string;
  /** A description for the access token */
  description?: string;
  /** Base role for the token */
  role?: Role;
  /** A list of custom role IDs to use as access limits for the access token */
  customRoleIds?: string[];
  /**
   * A JSON array of statements represented as JSON objects with three attributes: effect,
   * resources, actions. May be used in place of a role.
   */
  inlineRole?: StatementPost[];
  /** Whether the token is a service token */
  serviceToken?: boolean;
  /** The default API version for this token */
  defaultApiVersion?: number;
};

export const accessTokenPostSchema: Schema<AccessTokenPost> = s.object<AccessTokenPost>({
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  role: s.optional(s.lazy(() => roleSchema)),
  customRoleIds: s.optional(s.array(s.string())),
  inlineRole: s.optional(s.array(s.lazy(() => statementPostSchema))),
  serviceToken: s.optional(s.boolean()),
  defaultApiVersion: s.optional(s.int()),
});
