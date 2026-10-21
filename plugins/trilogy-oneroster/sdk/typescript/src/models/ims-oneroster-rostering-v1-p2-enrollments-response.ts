import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { enrollmentSchema, type Enrollment } from "./enrollment.js";

export type ImsOnerosterRosteringV1P2EnrollmentsResponse = {
  enrollments: Enrollment[];
  totalCount: number;
  pageCount: number;
  pageNumber: number;
  offset: number;
  limit: number;
};

export const imsOnerosterRosteringV1P2EnrollmentsResponseSchema: Schema<ImsOnerosterRosteringV1P2EnrollmentsResponse> =
  s.object<ImsOnerosterRosteringV1P2EnrollmentsResponse>({
    enrollments: s.array(s.lazy(() => enrollmentSchema)),
    totalCount: s.float64(),
    pageCount: s.float64(),
    pageNumber: s.float64(),
    offset: s.float64(),
    limit: s.float64(),
  });
