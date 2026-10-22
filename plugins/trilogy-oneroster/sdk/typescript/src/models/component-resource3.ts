import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { courseComponentSchema, type CourseComponent } from "./course-component.js";
import { resource3Schema, type Resource3 } from "./resource3.js";
import { statusSchema, type Status } from "./status.js";

/** Represents a resource associated with a course component. */
export type ComponentResource3 = {
  sourcedId: string;
  status: Status;
  dateLastModified?: Date;
  metadata?: Record<string, Record<string, unknown>> | null;
  courseComponent: CourseComponent;
  resource: Resource3;
  title: string;
  /** @default 0 */
  sortOrder?: number;
};

export const componentResource3Schema: Schema<ComponentResource3> = s.object<ComponentResource3>({
  sourcedId: s.string(),
  status: statusSchema,
  dateLastModified: s.optional(s.dateTime()),
  metadata: s.optionalNullable(s.record(s.string(), s.record(s.string(), s.unknown()))),
  courseComponent: courseComponentSchema,
  resource: resource3Schema,
  title: s.string(),
  sortOrder: s.defaulted(s.float64(), 0),
});
