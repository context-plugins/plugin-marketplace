import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { classTypeSchema, type ClassType } from "./class-type.js";
import { courseSchema, type Course } from "./course.js";
import { org5Schema, type Org5 } from "./org5.js";
import { resource3Schema, type Resource3 } from "./resource3.js";
import { Status, statusSchema } from "./status.js";
import { term2Schema, type Term2 } from "./term2.js";

export type Class17 = {
  sourcedId?: string;
  /** @default Status.Active */
  status?: Status;
  metadata?: Record<string, Record<string, unknown>>;
  title: string;
  classCode?: string;
  classType?: ClassType;
  location?: string;
  grades?: string[];
  subjects?: string[];
  course: Course;
  org: Org5;
  subjectCodes?: string[];
  periods?: string[];
  resources?: Resource3[];
  terms: Term2[];
};

export const class17Schema: Schema<Class17> = s.object<Class17>({
  sourcedId: s.optional(s.string()),
  status: s.defaulted(statusSchema, Status.Active),
  metadata: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
  title: s.string(),
  classCode: s.optional(s.string()),
  classType: s.optional(s.lazy(() => classTypeSchema)),
  location: s.optional(s.string()),
  grades: s.optional(s.array(s.string())),
  subjects: s.optional(s.array(s.string())),
  course: courseSchema,
  org: org5Schema,
  subjectCodes: s.optional(s.array(s.string())),
  periods: s.optional(s.array(s.string())),
  resources: s.optional(s.array(s.lazy(() => resource3Schema))),
  terms: s.array(s.lazy(() => term2Schema)),
});
