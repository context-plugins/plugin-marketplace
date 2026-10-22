import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { classTypeSchema, type ClassType } from "./class-type.js";
import { course1Schema, type Course1 } from "./course1.js";
import { resource1Schema, type Resource1 } from "./resource1.js";
import { school1Schema, type School1 } from "./school1.js";
import { statusSchema, type Status } from "./status.js";
import { termSchema, type Term } from "./term.js";

/** Represents a class. */
export type Class = {
  sourcedId: string;
  status: Status;
  dateLastModified?: Date;
  metadata?: Record<string, Record<string, unknown>> | null;
  title: string;
  classCode: string | null;
  classType: ClassType;
  location: string | null;
  grades?: string[];
  subjects?: string[];
  course: Course1 | null;
  school: School1 | null;
  terms: Term[];
  subjectCodes?: string[];
  periods?: string[];
  resources?: Resource1[];
};

export const classSchema: Schema<Class> = s.object<Class>({
  sourcedId: s.string(),
  status: statusSchema,
  dateLastModified: s.optional(s.dateTime()),
  metadata: s.optionalNullable(s.record(s.string(), s.record(s.string(), s.unknown()))),
  title: s.string(),
  classCode: s.nullable(s.string()),
  classType: classTypeSchema,
  location: s.nullable(s.string()),
  grades: s.optional(s.array(s.string())),
  subjects: s.optional(s.array(s.string())),
  course: s.nullable(s.lazy(() => course1Schema)),
  school: s.nullable(s.lazy(() => school1Schema)),
  terms: s.array(s.lazy(() => termSchema)),
  subjectCodes: s.optional(s.array(s.string())),
  periods: s.optional(s.array(s.string())),
  resources: s.optional(s.array(s.lazy(() => resource1Schema))),
});
