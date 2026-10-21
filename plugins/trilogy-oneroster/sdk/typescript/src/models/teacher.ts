import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { agentSchema, type Agent } from "./agent.js";
import { demographicsSchema, type Demographics } from "./demographics.js";
import { primaryOrgSchema, type PrimaryOrg } from "./primary-org.js";
import { role8Schema, type Role8 } from "./role8.js";
import { statusSchema, type Status } from "./status.js";
import { userIdSchema, type UserId } from "./user-id.js";

export type Teacher = {
  sourcedId: string;
  status: Status;
  dateLastModified?: Date;
  metadata?: Record<string, Record<string, unknown>> | null;
  userMasterIdentifier?: string | null;
  username?: string | null;
  userIds?: UserId[];
  enabledUser: boolean;
  givenName: string;
  familyName: string;
  middleName?: string | null;
  roles: Role8[];
  agents: Agent[];
  primaryOrg?: PrimaryOrg;
  email?: string | null;
  preferredFirstName?: string | null;
  preferredMiddleName?: string | null;
  preferredLastName?: string | null;
  pronouns?: string | null;
  grades?: string[];
  password?: string | null;
  sms?: string | null;
  phone?: string | null;
  demographics?: Demographics | null;
};

export const teacherSchema: Schema<Teacher> = s.object<Teacher>({
  sourcedId: s.string(),
  status: statusSchema,
  dateLastModified: s.optional(s.dateTime()),
  metadata: s.optionalNullable(s.record(s.string(), s.record(s.string(), s.unknown()))),
  userMasterIdentifier: s.optionalNullable(s.string()),
  username: s.optionalNullable(s.string()),
  userIds: s.optional(s.array(s.lazy(() => userIdSchema))),
  enabledUser: s.boolean(),
  givenName: s.string(),
  familyName: s.string(),
  middleName: s.optionalNullable(s.string()),
  roles: s.array(s.lazy(() => role8Schema)),
  agents: s.array(s.lazy(() => agentSchema)),
  primaryOrg: s.optional(s.lazy(() => primaryOrgSchema)),
  email: s.optionalNullable(s.string()),
  preferredFirstName: s.optionalNullable(s.string()),
  preferredMiddleName: s.optionalNullable(s.string()),
  preferredLastName: s.optionalNullable(s.string()),
  pronouns: s.optionalNullable(s.string()),
  grades: s.optional(s.array(s.string())),
  password: s.optionalNullable(s.string()),
  sms: s.optionalNullable(s.string()),
  phone: s.optionalNullable(s.string()),
  demographics: s.optionalNullable(s.lazy(() => demographicsSchema)),
});
