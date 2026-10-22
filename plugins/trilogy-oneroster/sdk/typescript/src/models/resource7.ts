import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { importanceSchema, type Importance } from "./importance.js";
import { roleSchema, type Role } from "./role.js";
import { statusSchema, type Status } from "./status.js";

export type Resource7 = {
  sourcedId?: string;
  status?: Status;
  dateLastModified?: Date;
  metadata?: Record<string, Record<string, unknown>> | null;
  title: string;
  roles?: Role[];
  importance?: Importance;
  vendorResourceId: string;
  vendorId?: string;
  applicationId?: string;
};

export const resource7Schema: Schema<Resource7> = s.object<Resource7>({
  sourcedId: s.optional(s.string()),
  status: s.optional(s.lazy(() => statusSchema)),
  dateLastModified: s.optional(s.dateTime()),
  metadata: s.optionalNullable(s.record(s.string(), s.record(s.string(), s.unknown()))),
  title: s.string(),
  roles: s.optional(s.array(s.lazy(() => roleSchema))),
  importance: s.optional(s.lazy(() => importanceSchema)),
  vendorResourceId: s.string(),
  vendorId: s.optional(s.string()),
  applicationId: s.optional(s.string()),
});
