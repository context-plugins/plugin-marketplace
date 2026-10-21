import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { academicSessionSchema, type AcademicSession } from "./academic-session.js";

export type ImsOnerosterRosteringV1P2AcademicSessionsResponse = {
  academicSessions: AcademicSession[];
  totalCount: number;
  pageCount: number;
  pageNumber: number;
  offset: number;
  limit: number;
};

export const imsOnerosterRosteringV1P2AcademicSessionsResponseSchema: Schema<ImsOnerosterRosteringV1P2AcademicSessionsResponse> =
  s.object<ImsOnerosterRosteringV1P2AcademicSessionsResponse>({
    academicSessions: s.array(s.lazy(() => academicSessionSchema)),
    totalCount: s.float64(),
    pageCount: s.float64(),
    pageNumber: s.float64(),
    offset: s.float64(),
    limit: s.float64(),
  });
