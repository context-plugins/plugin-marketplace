import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Valid only for write actions. Represents the type of write action. REDIRECT - The client renders
 * the URL which contains information for carrying out the action. EXECUTION - Send a request to an
 * external server and execute the action. MCP - Send a tools/call request to an MCP server to
 * execute the action.
 */
export const WriteActionType = {
  Redirect: "REDIRECT",
  Execution: "EXECUTION",
  Mcp: "MCP",
} as const;
export type WriteActionType = (typeof WriteActionType)[keyof typeof WriteActionType] | (string & {});

export const writeActionTypeSchema: EnumSchema<WriteActionType> = s.enumOf<WriteActionType>(WriteActionType);
