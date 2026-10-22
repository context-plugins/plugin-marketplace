import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";
import { memberSummarySchema, type MemberSummary } from "./member-summary.js";
import { statementSchema, type Statement } from "./statement.js";

export type Token = {
  id: string;
  ownerId: string;
  memberId: string;
  member?: MemberSummary;
  /** A human-friendly name for the access token */
  name?: string;
  /** A description for the access token */
  description?: string;
  creationDate: number;
  lastModified: number;
  /** A list of custom role IDs to use as access limits for the access token */
  customRoleIds?: string[];
  /**
   * An array of policy statements, with three attributes: effect, resources, actions. May be used
   * in place of a role.
   */
  inlineRole?: Statement[];
  /** Base role for the token */
  role?: string;
  /**
   * The token value. When creating or resetting, contains the entire token value. Otherwise,
   * contains the last four characters.
   */
  token?: string;
  /** Whether this is a service token or a personal token */
  serviceToken?: boolean;
  /** The location and content type of related resources */
  links: Record<string, Link>;
  /** The default API version for this token */
  defaultApiVersion?: number;
  lastUsed?: number;
};

export const tokenSchema: Schema<Token> = s.object<Token>({
  id: s.string(),
  ownerId: s.string(),
  memberId: s.string(),
  member: s.optional(s.lazy(() => memberSummarySchema)),
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  creationDate: s.int(),
  lastModified: s.int(),
  customRoleIds: s.optional(s.array(s.string())),
  inlineRole: s.optional(s.array(s.lazy(() => statementSchema))),
  role: s.optional(s.string()),
  token: s.optional(s.string()),
  serviceToken: s.optional(s.boolean()),
  links: s.record(
    s.string(),
    s.lazy(() => linkSchema),
  ),
  defaultApiVersion: s.optional(s.int()),
  lastUsed: s.optional(s.int()),
  _keysMap: {
    id: "_id",
    member: "_member",
    links: "_links",
  },
});
