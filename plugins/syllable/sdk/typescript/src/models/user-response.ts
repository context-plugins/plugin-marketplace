import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { firstNameSchema, type FirstName } from "./unions/first-name.js";
import { lastNameSchema, type LastName } from "./unions/last-name.js";
import { lastSessionAtSchema, type LastSessionAt } from "./unions/last-session-at.js";
import { lastUpdatedBy6Schema, type LastUpdatedBy6 } from "./unions/last-updated-by6.js";
import { lastUpdatedComments4Schema, type LastUpdatedComments4 } from "./unions/last-updated-comments4.js";
import { utmSchema, type Utm } from "./unions/utm.js";
import { userActivityStatus2Schema, type UserActivityStatus2 } from "./user-activity-status2.js";

/** Information about a user. */
export type UserResponse = {
  /** Email address of the user */
  email: string;
  /** First name of the user */
  firstName?: FirstName;
  /** Last name of the user */
  lastName?: LastName;
  /** ID of the role assigned to the user */
  roleId: number;
  /** Optional UTM campaign attribution to record in user_metadata. */
  utm?: Utm;
  /** Comments for the most recent edit to the user. */
  lastUpdatedComments?: LastUpdatedComments4;
  /** Internal ID of the user */
  id: number;
  /** Name of the role assigned to the user */
  roleName: string;
  /** Whether the welcome email has been sent to the user */
  emailSent: boolean;
  /** The activity status of the user */
  activityStatus: UserActivityStatus2;
  /** The timestamp of the most recent update to the user */
  lastUpdated: Date;
  /** The email address of the user who last updated the user */
  lastUpdatedBy?: LastUpdatedBy6;
  /** The timestamp of the user's last session */
  lastSessionAt?: LastSessionAt;
};

export const userResponseSchema: Schema<UserResponse> = s.object<UserResponse>({
  email: s.string(),
  firstName: s.optional(s.lazy(() => firstNameSchema)),
  lastName: s.optional(s.lazy(() => lastNameSchema)),
  roleId: s.int(),
  utm: s.optional(s.lazy(() => utmSchema)),
  lastUpdatedComments: s.optional(s.lazy(() => lastUpdatedComments4Schema)),
  id: s.int(),
  roleName: s.string(),
  emailSent: s.boolean(),
  activityStatus: userActivityStatus2Schema,
  lastUpdated: s.dateTime(),
  lastUpdatedBy: s.optional(s.lazy(() => lastUpdatedBy6Schema)),
  lastSessionAt: s.optional(s.lazy(() => lastSessionAtSchema)),
  _keysMap: {
    firstName: "first_name",
    lastName: "last_name",
    roleId: "role_id",
    lastUpdatedComments: "last_updated_comments",
    roleName: "role_name",
    emailSent: "email_sent",
    activityStatus: "activity_status",
    lastUpdated: "last_updated",
    lastUpdatedBy: "last_updated_by",
    lastSessionAt: "last_session_at",
  },
});
