import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { teacherSchema, type Teacher } from "./teacher.js";

export type ImsOnerosterRosteringV1P2ClassesTeachersResponse = {
  teachers: Teacher[];
  totalCount: number;
  pageCount: number;
  pageNumber: number;
  offset: number;
  limit: number;
};

export const imsOnerosterRosteringV1P2ClassesTeachersResponseSchema: Schema<ImsOnerosterRosteringV1P2ClassesTeachersResponse> =
  s.object<ImsOnerosterRosteringV1P2ClassesTeachersResponse>({
    teachers: s.array(s.lazy(() => teacherSchema)),
    totalCount: s.float64(),
    pageCount: s.float64(),
    pageNumber: s.float64(),
    offset: s.float64(),
    limit: s.float64(),
  });
