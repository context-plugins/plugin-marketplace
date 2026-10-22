import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformDepartmentReference1Schema,
  type PlatformDepartmentReference1,
} from "./platform-department-reference1.js";
import { platformPersonType1Schema, type PlatformPersonType1 } from "./platform-person-type1.js";
import {
  platformUserDatasourceProfileSchema,
  type PlatformUserDatasourceProfile,
} from "./platform-user-datasource-profile.js";
import { platformUserManager1Schema, type PlatformUserManager1 } from "./platform-user-manager1.js";

/** A user in the Glean directory. */
export type PlatformUser = {
  /**
   * Opaque canonical Glean user ID. Other Platform APIs, such as usage limits, accept and return
   * this ID.
   */
  userId: string;
  /** The name that Glean shows for the user. */
  displayName: string;
  /** Primary email address. */
  email?: string;
  /**
   * The user's other email addresses, sorted, without the primary email. Absent when the user has
   * none or the workspace does not show alias emails.
   */
  aliasEmails?: string[];
  /**
   * Employment status or account type. Absent when the workspace hides the employee type attribute.
   */
  userType?: PlatformPersonType1;
  /** Job title. */
  title?: string;
  /** The user's department. Absent when the user has no department. */
  department?: PlatformDepartmentReference1;
  /**
   * The user's direct manager. Absent when the user has no manager or the manager is not in the
   * directory.
   */
  manager?: PlatformUserManager1;
  /** Avatar URL. */
  photoUrl?: string;
  /**
   * The user's accounts in connected apps. Present only when include contains DATASOURCE_PROFILES.
   * Each account appears once, even when more than one connected app instance reports it.
   */
  datasourceProfiles?: PlatformUserDatasourceProfile[];
};

export const platformUserSchema: Schema<PlatformUser> = s.object<PlatformUser>({
  userId: s.string(),
  displayName: s.string(),
  email: s.optional(s.string()),
  aliasEmails: s.optional(s.array(s.string())),
  userType: s.optional(s.lazy(() => platformPersonType1Schema)),
  title: s.optional(s.string()),
  department: s.optional(s.lazy(() => platformDepartmentReference1Schema)),
  manager: s.optional(s.lazy(() => platformUserManager1Schema)),
  photoUrl: s.optional(s.string()),
  datasourceProfiles: s.optional(s.array(s.lazy(() => platformUserDatasourceProfileSchema))),
  _keysMap: {
    userId: "user_id",
    displayName: "display_name",
    aliasEmails: "alias_emails",
    userType: "user_type",
    photoUrl: "photo_url",
    datasourceProfiles: "datasource_profiles",
  },
});
