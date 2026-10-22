import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { courseComponent6Schema, type CourseComponent6 } from "./course-component6.js";

export type ImsOnerosterRosteringV1P2CoursesComponentsResponse2 = {
  /** Represents a component of a course. */
  courseComponent: CourseComponent6;
};

export const imsOnerosterRosteringV1P2CoursesComponentsResponse2Schema: Schema<ImsOnerosterRosteringV1P2CoursesComponentsResponse2> =
  s.object<ImsOnerosterRosteringV1P2CoursesComponentsResponse2>({
    courseComponent: courseComponent6Schema,
  });
