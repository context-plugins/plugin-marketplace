import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { agent1Schema, type Agent1 } from "./agent1.js";
import { metadataSchema, type Metadata } from "./metadata.js";
import { primaryOrg1Schema, type PrimaryOrg1 } from "./primary-org1.js";
import { role10Schema, type Role10 } from "./role10.js";
import { Status, statusSchema } from "./status.js";
import { userIdSchema, type UserId } from "./user-id.js";

export type User2 = {
  sourcedId?: string;
  metadata?: Metadata;
  /** @default Status.Active */
  status?: Status;
  userMasterIdentifier?: string | null;
  username?: string | null;
  userIds?: UserId[];
  enabledUser: boolean;
  givenName: string;
  familyName: string;
  middleName?: string | null;
  roles: Role10[];
  primaryOrg?: PrimaryOrg1;
  email?: string | null;
  preferredFirstName?: string | null;
  preferredMiddleName?: string | null;
  preferredLastName?: string | null;
  pronouns?: string | null;
  grades?: string[];
  password?: string | null;
  sms?: string | null;
  phone?: string | null;
  agents?: Agent1[];
};

export const user2Schema: Schema<User2> = s.object<User2>({
  sourcedId: s.optional(s.string()),
  metadata: s.optional(s.lazy(() => metadataSchema)),
  status: s.defaulted(statusSchema, Status.Active),
  userMasterIdentifier: s.optionalNullable(s.string()),
  username: s.optionalNullable(s.string()),
  userIds: s.optional(s.array(s.lazy(() => userIdSchema))),
  enabledUser: s.boolean(),
  givenName: s.string(),
  familyName: s.string(),
  middleName: s.optionalNullable(s.string()),
  roles: s.array(s.lazy(() => role10Schema)),
  primaryOrg: s.optional(s.lazy(() => primaryOrg1Schema)),
  email: s.optionalNullable(s.string()),
  preferredFirstName: s.optionalNullable(s.string()),
  preferredMiddleName: s.optionalNullable(s.string()),
  preferredLastName: s.optionalNullable(s.string()),
  pronouns: s.optionalNullable(s.string()),
  grades: s.optional(s.array(s.string())),
  password: s.optionalNullable(s.string()),
  sms: s.optionalNullable(s.string()),
  phone: s.optionalNullable(s.string()),
  agents: s.optional(s.array(s.lazy(() => agent1Schema))),
});
