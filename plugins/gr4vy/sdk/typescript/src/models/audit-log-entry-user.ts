import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type6, type6Schema } from "./type6.js";
import { emailAddress2Schema, type EmailAddress2 } from "./unions/email-address2.js";
import { id1Schema, type Id1 } from "./unions/id1.js";
import { userStatus2Schema, type UserStatus2 } from "./user-status2.js";

export type AuditLogEntryUser = {
  /** Always `user`. @default Type6.User */
  type?: Type6;
  /** The ID of the user. */
  id?: Id1;
  /** The name of the user. */
  name: string;
  /** The email address for this user. */
  emailAddress?: EmailAddress2;
  /** Whether this is a Gr4vy staff user. */
  isStaff: boolean;
  /** The status of the user. */
  status: UserStatus2;
};

export const auditLogEntryUserSchema: Schema<AuditLogEntryUser> = s.object<AuditLogEntryUser>({
  type: s.defaulted(type6Schema, Type6.User),
  id: s.optional(s.lazy(() => id1Schema)),
  name: s.string(),
  emailAddress: s.optional(s.lazy(() => emailAddress2Schema)),
  isStaff: s.boolean(),
  status: userStatus2Schema,
  _keysMap: {
    emailAddress: "email_address",
    isStaff: "is_staff",
  },
});
