import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { course12Schema, type Course12 } from "./course12.js";

export type ImsOnerosterRosteringV1P2CoursesRequest = {
  /** Represents a course. */
  course: Course12;
};

export const imsOnerosterRosteringV1P2CoursesRequestSchema: Schema<ImsOnerosterRosteringV1P2CoursesRequest> =
  s.object<ImsOnerosterRosteringV1P2CoursesRequest>({
    course: course12Schema,
  });
