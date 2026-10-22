import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { importanceSchema, type Importance } from "./importance.js";
import { roleSchema, type Role } from "./role.js";
import { statusSchema, type Status } from "./status.js";

/** Represents a digital resource of some kind. */
export type Resource = {
  sourcedId: string;
  status: Status;
  dateLastModified?: Date;
  metadata?: Record<string, Record<string, unknown>> | null;
  title: string;
  roles?: Role[];
  importance?: Importance;
  vendorResourceId: string;
  vendorId?: string | null;
  applicationId?: string | null;
};

export const resourceSchema: Schema<Resource> = s.object<Resource>({
  sourcedId: s.string(),
  status: statusSchema,
  dateLastModified: s.optional(s.dateTime()),
  metadata: s.optionalNullable(s.record(s.string(), s.record(s.string(), s.unknown()))),
  title: s.string(),
  roles: s.optional(s.array(s.lazy(() => roleSchema))),
  importance: s.optional(s.lazy(() => importanceSchema)),
  vendorResourceId: s.string(),
  vendorId: s.optionalNullable(s.string()),
  applicationId: s.optionalNullable(s.string()),
});
