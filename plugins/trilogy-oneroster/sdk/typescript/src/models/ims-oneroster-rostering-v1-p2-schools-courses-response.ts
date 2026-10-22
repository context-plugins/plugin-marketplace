import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { course12Schema, type Course12 } from "./course12.js";

export type ImsOnerosterRosteringV1P2SchoolsCoursesResponse = {
  courses: Course12[];
  totalCount: number;
  pageCount: number;
  pageNumber: number;
  offset: number;
  limit: number;
};

export const imsOnerosterRosteringV1P2SchoolsCoursesResponseSchema: Schema<ImsOnerosterRosteringV1P2SchoolsCoursesResponse> =
  s.object<ImsOnerosterRosteringV1P2SchoolsCoursesResponse>({
    courses: s.array(s.lazy(() => course12Schema)),
    totalCount: s.float64(),
    pageCount: s.float64(),
    pageNumber: s.float64(),
    offset: s.float64(),
    limit: s.float64(),
  });
