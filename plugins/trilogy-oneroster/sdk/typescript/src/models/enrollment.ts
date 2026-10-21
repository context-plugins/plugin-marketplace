import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { class5Schema, type Class5 } from "./class5.js";
import { role1Schema, type Role1 } from "./role1.js";
import { statusSchema, type Status } from "./status.js";
import { userSchema, type User } from "./user.js";

/** Represents an enrollment. */
export type Enrollment = {
  sourcedId: string;
  status: Status;
  dateLastModified?: Date;
  metadata?: Record<string, Record<string, unknown>> | null;
  role: Role1;
  primary: boolean;
  beginDate: string | null;
  endDate: string | null;
  user: User;
  class: Class5;
};

export const enrollmentSchema: Schema<Enrollment> = s.object<Enrollment>({
  sourcedId: s.string(),
  status: statusSchema,
  dateLastModified: s.optional(s.dateTime()),
  metadata: s.optionalNullable(s.record(s.string(), s.record(s.string(), s.unknown()))),
  role: role1Schema,
  primary: s.boolean(),
  beginDate: s.nullable(s.string()),
  endDate: s.nullable(s.string()),
  user: userSchema,
  class: class5Schema,
});
