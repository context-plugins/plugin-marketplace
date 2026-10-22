import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { courseComponent6Schema, type CourseComponent6 } from "./course-component6.js";

export type ImsOnerosterRosteringV1P2CoursesComponentsResponse1 = {
  courseComponents: CourseComponent6[];
  totalCount: number;
  pageCount: number;
  pageNumber: number;
  offset: number;
  limit: number;
};

export const imsOnerosterRosteringV1P2CoursesComponentsResponse1Schema: Schema<ImsOnerosterRosteringV1P2CoursesComponentsResponse1> =
  s.object<ImsOnerosterRosteringV1P2CoursesComponentsResponse1>({
    courseComponents: s.array(s.lazy(() => courseComponent6Schema)),
    totalCount: s.float64(),
    pageCount: s.float64(),
    pageNumber: s.float64(),
    offset: s.float64(),
    limit: s.float64(),
  });
