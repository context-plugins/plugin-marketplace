import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { mcpLockInternalSchema, mcpLockSchema, type McpLock } from "../mcp-lock.js";

export type Lock = McpLock;

export const lockInternalSchema: Schema<Lock> = s.of<Lock>(s.union([s.lazy(() => mcpLockInternalSchema)]));

export const lockSchema: Schema<Lock> = s.lazySchema(() =>
  s.of<Lock>(s.union([s.lazy(() => mcpLockSchema)])),
);
