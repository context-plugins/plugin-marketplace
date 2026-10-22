import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { description28Schema, type Description28 } from "./unions/description28.js";
import { lastUpdatedComments2Schema, type LastUpdatedComments2 } from "./unions/last-updated-comments2.js";

/** Information about a role. */
export type RoleResponse = {
  /** The name of the role. */
  name: string;
  /** The description of the role. */
  description?: Description28;
  /**
   * The permissions associated with the role. Available permissions can be found by calling `GET
   * /permissions`.
   */
  permissions: string[];
  /** The internal ID of the role. */
  id: number;
  /** Comments for the most recent edit to the role. */
  lastUpdatedComments?: LastUpdatedComments2;
  /** Whether this is a built-in system role that cannot be updated or deleted */
  isSystemRole: boolean;
  /** The timestamp of the most recent update to the role */
  lastUpdated: Date;
  /** The email of the user who last updated the role */
  lastUpdatedBy: string;
};

export const roleResponseSchema: Schema<RoleResponse> = s.object<RoleResponse>({
  name: s.string(),
  description: s.optional(s.lazy(() => description28Schema)),
  permissions: s.array(s.string()),
  id: s.int(),
  lastUpdatedComments: s.optional(s.lazy(() => lastUpdatedComments2Schema)),
  isSystemRole: s.boolean(),
  lastUpdated: s.dateTime(),
  lastUpdatedBy: s.string(),
  _keysMap: {
    lastUpdatedComments: "last_updated_comments",
    isSystemRole: "is_system_role",
    lastUpdated: "last_updated",
    lastUpdatedBy: "last_updated_by",
  },
});
