import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { scopeSchema, type Scope } from "./scope.js";
import { membershipIdSchema, type MembershipId } from "./unions/membership-id.js";

/**
 * A readable folder: the shared team folder, or one member's own files.
 *
 * ``membership_id`` is null for the team folder, which no single member owns.
 */
export type DataFileGroup = {
  scope: Scope;
  membershipId: MembershipId;
  fileCount: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataFileGroupSchema: Schema<DataFileGroup> = s.object<DataFileGroup>(
  {
    scope: scopeSchema,
    membershipId: membershipIdSchema,
    fileCount: s.int(),
    _keysMap: {
      membershipId: "membership_id",
      fileCount: "file_count",
    },
  },
  { additionalProperties: s.json() },
);
