import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Optional headers to include in tool calls for agent. (It is discouraged to use this field for
 * "Authorization" headers, as values here are not encrypted. Instead, set up a service with either
 * basic, bearer, or custom header auth; attach the appropriate tools to that service, and the
 * attached tools will automatically use the auth configured on the service.)
 */
export type ToolHeaders = Record<string, string>;

export const toolHeadersSchema: Schema<ToolHeaders> = s.of<ToolHeaders>(
  s.union([s.record(s.string(), s.string())]),
);
