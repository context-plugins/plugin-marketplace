import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { class1Schema, type Class1 } from "./class1.js";
import { role1Schema, type Role1 } from "./role1.js";
import { statusSchema, type Status } from "./status.js";
import { user8Schema, type User8 } from "./user8.js";

export type Enrollment5 = {
  status?: Status;
  metadata?: Record<string, Record<string, unknown>>;
  role: Role1;
  /** @default false */
  primary?: boolean;
  beginDate?: string;
  endDate?: string;
  user: User8;
  class: Class1;
};

export const enrollment5Schema: Schema<Enrollment5> = s.object<Enrollment5>({
  status: s.optional(s.lazy(() => statusSchema)),
  metadata: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
  role: role1Schema,
  primary: s.defaulted(s.boolean(), false),
  beginDate: s.optional(s.string()),
  endDate: s.optional(s.string()),
  user: user8Schema,
  class: class1Schema,
});
