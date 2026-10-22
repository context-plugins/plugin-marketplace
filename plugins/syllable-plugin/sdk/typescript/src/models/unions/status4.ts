import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { directoryMemberStatusSchema, type DirectoryMemberStatus } from "../directory-member-status.js";

/**
 * Filter contacts by deletion status: all includes active and deleted contacts; active excludes
 * deleted contacts; deleted includes only deleted contacts. When supplied, overrides
 * include_deleted. When omitted, include_deleted controls inclusion.
 */
export type Status4 = DirectoryMemberStatus;

export const status4Schema: Schema<Status4> = s.of<Status4>(
  s.union([s.lazy(() => directoryMemberStatusSchema)]),
);
