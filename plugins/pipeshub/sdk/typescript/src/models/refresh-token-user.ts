import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";
import { kindSchema, type Kind } from "./kind.js";
import { roleSchema, type Role } from "./role.js";

/** User record returned with a refreshed access token */
export type RefreshTokenUser = {
  /** User ID */
  id: string;
  /** Organization ID */
  orgId: string;
  email: string;
  fullName: string;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  /** Mobile number (10-15 digits with optional +) */
  mobile?: string;
  designation?: string;
  /**
   * Whether this account is a person who signs in (`human`) or a machine identity that automation
   * authenticates as (`service`). Absent on records written before service accounts existed, which
   * are all human.
   */
  kind?: Kind;
  /** Free text explaining what a service account is for. Unused for people. */
  description?: string;
  /**
   * The account is suspended: its tokens stop working and no session can be issued, but the record,
   * its group memberships and its permission-graph node survive so it can be switched back on.
   *
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Internal and transient. Present only while a deleted service account is being brought back, and
   * cleared when that finishes either way. It lets the steps that complete or undo a restore tell
   * their own attempt from a later one. Not something to depend on.
   */
  restoreOpId?: string;
  /** Organization role stored on the user document (`admin` or `member`) */
  role?: Role;
  address?: Address;
  /** Whether user has consented to data collection */
  dataCollectionConsent?: boolean;
  hasLoggedIn: boolean;
  isDeleted: boolean;
  /** ID of user who deleted this user */
  deletedBy?: string;
  /** Base64-encoded data URI of the user's display picture */
  profilePicture?: string | null;
  slug: string;
  createdAt: string;
  updatedAt: string;
  v: number;
};

export const refreshTokenUserSchema: Schema<RefreshTokenUser> = s.object<RefreshTokenUser>({
  id: s.string(),
  orgId: s.string(),
  email: s.string(),
  fullName: s.string(),
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
  middleName: s.optional(s.string()),
  mobile: s.optional(s.string()),
  designation: s.optional(s.string()),
  kind: s.optional(s.lazy(() => kindSchema)),
  description: s.optional(s.string()),
  isDisabled: s.defaulted(s.boolean(), false),
  restoreOpId: s.optional(s.string()),
  role: s.optional(s.lazy(() => roleSchema)),
  address: s.optional(s.lazy(() => addressSchema)),
  dataCollectionConsent: s.optional(s.boolean()),
  hasLoggedIn: s.boolean(),
  isDeleted: s.boolean(),
  deletedBy: s.optional(s.string()),
  profilePicture: s.optionalNullable(s.string()),
  slug: s.string(),
  createdAt: s.string(),
  updatedAt: s.string(),
  v: s.int(),
  _keysMap: {
    id: "_id",
    v: "__v",
  },
});
