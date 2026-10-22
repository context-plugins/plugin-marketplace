import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { courseComponentSchema, type CourseComponent } from "./course-component.js";
import { courseSchema, type Course } from "./course.js";
import { parent3Schema, type Parent3 } from "./parent3.js";
import { statusSchema, type Status } from "./status.js";

/** Represents a component of a course. */
export type CourseComponent6 = {
  sourcedId?: string;
  status: Status;
  dateLastModified?: Date;
  metadata?: Record<string, Record<string, unknown>> | null;
  course: Course;
  courseComponent?: CourseComponent | null;
  parent?: Parent3 | null;
  title: string;
  sortOrder: number;
  prerequisites?: string[] | null;
  prerequisiteCriteria?: string | null;
  /** The date the component is unlocked for the student */
  unlockDate: string;
};

export const courseComponent6Schema: Schema<CourseComponent6> = s.object<CourseComponent6>({
  sourcedId: s.optional(s.string()),
  status: statusSchema,
  dateLastModified: s.optional(s.dateTime()),
  metadata: s.optionalNullable(s.record(s.string(), s.record(s.string(), s.unknown()))),
  course: courseSchema,
  courseComponent: s.optionalNullable(s.lazy(() => courseComponentSchema)),
  parent: s.optionalNullable(s.lazy(() => parent3Schema)),
  title: s.string(),
  sortOrder: s.float64(),
  prerequisites: s.optionalNullable(s.array(s.string())),
  prerequisiteCriteria: s.optionalNullable(s.string()),
  unlockDate: s.string(),
});
