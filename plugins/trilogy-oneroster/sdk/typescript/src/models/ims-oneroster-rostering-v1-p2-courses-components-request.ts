import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { courseComponent4Schema, type CourseComponent4 } from "./course-component4.js";

export type ImsOnerosterRosteringV1P2CoursesComponentsRequest = {
  /** Represents a component of a course. */
  courseComponent: CourseComponent4;
};

export const imsOnerosterRosteringV1P2CoursesComponentsRequestSchema: Schema<ImsOnerosterRosteringV1P2CoursesComponentsRequest> =
  s.object<ImsOnerosterRosteringV1P2CoursesComponentsRequest>({
    courseComponent: courseComponent4Schema,
  });
