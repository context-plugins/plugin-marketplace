import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { description28Schema, type Description28 } from "./unions/description28.js";
import { lastUpdatedComments2Schema, type LastUpdatedComments2 } from "./unions/last-updated-comments2.js";

/** Request model to update an existing role. */
export type RoleUpdateRequest = {
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
};

export const roleUpdateRequestSchema: Schema<RoleUpdateRequest> = s.object<RoleUpdateRequest>({
  name: s.string(),
  description: s.optional(s.lazy(() => description28Schema)),
  permissions: s.array(s.string()),
  id: s.int(),
  lastUpdatedComments: s.optional(s.lazy(() => lastUpdatedComments2Schema)),
  _keysMap: {
    lastUpdatedComments: "last_updated_comments",
  },
});
