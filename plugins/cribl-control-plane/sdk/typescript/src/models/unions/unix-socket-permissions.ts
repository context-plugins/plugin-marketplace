import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Permissions to set for socket e.g., 777. If empty, falls back to the runtime user's default
 * permissions.
 */
export type UnixSocketPermissions = string | number;

export const unixSocketPermissionsSchema: Schema<UnixSocketPermissions> = s.of<UnixSocketPermissions>(
  s.union([s.string(), s.float64()]),
);
