import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { academicSession1Schema, type AcademicSession1 } from "./academic-session1.js";
import { org5Schema, type Org5 } from "./org5.js";
import { statusSchema, type Status } from "./status.js";

/** Represents a course. */
export type Course12 = {
  sourcedId?: string;
  status: Status;
  dateLastModified?: Date;
  metadata?: Record<string, Record<string, unknown>> | null;
  title: string;
  academicSession?: AcademicSession1 | null;
  courseCode?: string | null;
  grades?: string[] | null;
  subjects?: string[] | null;
  subjectCodes?: string[] | null;
  org: Org5;
  level?: string | null;
  gradingScheme?: string | null;
};

export const course12Schema: Schema<Course12> = s.object<Course12>({
  sourcedId: s.optional(s.string()),
  status: statusSchema,
  dateLastModified: s.optional(s.dateTime()),
  metadata: s.optionalNullable(s.record(s.string(), s.record(s.string(), s.unknown()))),
  title: s.string(),
  academicSession: s.optionalNullable(s.lazy(() => academicSession1Schema)),
  courseCode: s.optionalNullable(s.string()),
  grades: s.optionalNullable(s.array(s.string())),
  subjects: s.optionalNullable(s.array(s.string())),
  subjectCodes: s.optionalNullable(s.array(s.string())),
  org: org5Schema,
  level: s.optionalNullable(s.string()),
  gradingScheme: s.optionalNullable(s.string()),
});
