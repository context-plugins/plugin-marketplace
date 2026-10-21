import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { permissionGrantInputSchema, type PermissionGrantInput } from "./permission-grant-input.js";

export type TeamPostInput = {
  /** List of custom role keys the team will access */
  customRoleKeys?: string[];
  /** A description of the team */
  description?: string;
  /** The team key */
  key: string;
  /** A list of member IDs who belong to the team */
  memberIDs?: string[];
  /** A human-friendly name for the team */
  name: string;
  /**
   * A list of permission grants. Permission grants allow access to a specific action, without
   * having to create or update a custom role.
   */
  permissionGrants?: PermissionGrantInput[];
  roleAttributes?: Record<string, Record<string, unknown>>;
};

export const teamPostInputSchema: Schema<TeamPostInput> = s.object<TeamPostInput>({
  customRoleKeys: s.optional(s.array(s.string())),
  description: s.optional(s.string()),
  key: s.string(),
  memberIDs: s.optional(s.array(s.string())),
  name: s.string(),
  permissionGrants: s.optional(s.array(s.lazy(() => permissionGrantInputSchema))),
  roleAttributes: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
});
