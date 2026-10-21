import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { actionTypeSourceSchema, type ActionTypeSource } from "./action-type-source.js";
import { authConfigSchema, type AuthConfig } from "./auth-config.js";
import { authTypeSchema, type AuthType } from "./auth-type.js";
import { knowledgeTypeSchema, type KnowledgeType } from "./knowledge-type.js";
import { objectPermissionsSchema, type ObjectPermissions } from "./object-permissions.js";
import { personObjectSchema, type PersonObject } from "./person-object.js";
import { type4Schema, type Type4 } from "./type4.js";
import { writeActionTypeSchema, type WriteActionType } from "./write-action-type.js";

/** The manifest for a tool that can be used to augment Glean Assistant. */
export type ToolMetadata = {
  /** The type of tool. */
  type: Type4;
  /**
   * Unique identifier for the tool. Name should be understandable by the LLM, and will be used to
   * invoke a tool.
   */
  name: string;
  /** Human understandable name of the tool. Max 50 characters. */
  displayName: string;
  /** An opaque id which is unique identifier for the tool. */
  toolId?: string;
  /** Description of the tool meant for a human. */
  displayDescription: string;
  /** URL used to fetch the logo. */
  logoUrl?: string;
  /**
   * Name of the generated object. This will be used to indicate to the end user what the generated
   * object contains.
   */
  objectName?: string;
  /** Indicates the kind of knowledge a tool would access or modify. */
  knowledgeType?: KnowledgeType;
  createdBy?: PersonObject;
  lastUpdatedBy?: PersonObject;
  /** The time the tool was created in ISO format (ISO 8601) */
  createdAt?: Date;
  /** The time the tool was last updated in ISO format (ISO 8601) */
  lastUpdatedAt?: Date;
  /**
   * Valid only for write actions. Represents the type of write action. REDIRECT - The client
   * renders the URL which contains information for carrying out the action. EXECUTION - Send a
   * request to an external server and execute the action. MCP - Send a tools/call request to an MCP
   * server to execute the action.
   */
  writeActionType?: WriteActionType;
  /**
   * Analytics-only signal (product snapshot) describing WHERE the action's read/write determination
   * came from. Complementary to the effective read/write value (the tool's ToolType, which drives
   * HITL): the value says read-or-write, this says how confident that is. MCP_ANNOTATION = from the
   * tool's read-only/destructive hints; ADMIN_OVERRIDE = an admin set it; NONE = no usable hint
   * (the effective value then defaults to write); NATIVE_TOOL_DEFINITION = from a curated native
   * tool (snapshot-derived). Does not affect runtime behavior.
   */
  actionTypeSource?: ActionTypeSource;
  /**
   * The type of authentication being used. Use 'OAUTH_*' when Glean calls an external API (e.g.,
   * Jira) on behalf of a user to obtain an OAuth token. 'OAUTH_ADMIN' utilizes an admin token for
   * external API calls on behalf all users. 'OAUTH_USER' uses individual user tokens for external
   * API calls. 'DWD' refers to domain wide delegation.
   */
  authType?: AuthType;
  /** Config for tool's authentication method. */
  auth?: AuthConfig;
  permissions?: ObjectPermissions;
  /** Usage instructions for the LLM to use this action. */
  usageInstructions?: string;
  /** Whether this action has been fully configured and validated. */
  isSetupFinished?: boolean;
};

export const toolMetadataSchema: Schema<ToolMetadata> = s.object<ToolMetadata>({
  type: type4Schema,
  name: s.string(),
  displayName: s.string(),
  toolId: s.optional(s.string()),
  displayDescription: s.string(),
  logoUrl: s.optional(s.string()),
  objectName: s.optional(s.string()),
  knowledgeType: s.optional(s.lazy(() => knowledgeTypeSchema)),
  createdBy: s.optional(s.lazy(() => personObjectSchema)),
  lastUpdatedBy: s.optional(s.lazy(() => personObjectSchema)),
  createdAt: s.optional(s.dateTime()),
  lastUpdatedAt: s.optional(s.dateTime()),
  writeActionType: s.optional(s.lazy(() => writeActionTypeSchema)),
  actionTypeSource: s.optional(s.lazy(() => actionTypeSourceSchema)),
  authType: s.optional(s.lazy(() => authTypeSchema)),
  auth: s.optional(s.lazy(() => authConfigSchema)),
  permissions: s.optional(s.lazy(() => objectPermissionsSchema)),
  usageInstructions: s.optional(s.string()),
  isSetupFinished: s.optional(s.boolean()),
});
