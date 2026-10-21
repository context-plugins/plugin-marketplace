import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { course12Schema, type Course12 } from "./course12.js";

export type ImsOnerosterRosteringV1P2CoursesResponse2 = {
  /** Represents a course. */
  course: Course12;
};

export const imsOnerosterRosteringV1P2CoursesResponse2Schema: Schema<ImsOnerosterRosteringV1P2CoursesResponse2> =
  s.object<ImsOnerosterRosteringV1P2CoursesResponse2>({
    course: course12Schema,
  });
