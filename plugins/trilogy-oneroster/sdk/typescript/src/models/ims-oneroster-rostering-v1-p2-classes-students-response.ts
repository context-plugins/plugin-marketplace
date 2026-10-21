import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { student7Schema, type Student7 } from "./student7.js";

export type ImsOnerosterRosteringV1P2ClassesStudentsResponse = {
  students: Student7[];
  totalCount: number;
  pageCount: number;
  pageNumber: number;
  offset: number;
  limit: number;
};

export const imsOnerosterRosteringV1P2ClassesStudentsResponseSchema: Schema<ImsOnerosterRosteringV1P2ClassesStudentsResponse> =
  s.object<ImsOnerosterRosteringV1P2ClassesStudentsResponse>({
    students: s.array(s.lazy(() => student7Schema)),
    totalCount: s.float64(),
    pageCount: s.float64(),
    pageNumber: s.float64(),
    offset: s.float64(),
    limit: s.float64(),
  });
