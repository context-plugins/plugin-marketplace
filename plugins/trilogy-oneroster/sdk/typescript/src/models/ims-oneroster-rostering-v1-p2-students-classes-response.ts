import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { classSchema, type Class } from "./class.js";

export type ImsOnerosterRosteringV1P2StudentsClassesResponse = {
  classes: Class[];
  totalCount: number;
  pageCount: number;
  pageNumber: number;
  offset: number;
  limit: number;
};

export const imsOnerosterRosteringV1P2StudentsClassesResponseSchema: Schema<ImsOnerosterRosteringV1P2StudentsClassesResponse> =
  s.object<ImsOnerosterRosteringV1P2StudentsClassesResponse>({
    classes: s.array(s.lazy(() => classSchema)),
    totalCount: s.float64(),
    pageCount: s.float64(),
    pageNumber: s.float64(),
    offset: s.float64(),
    limit: s.float64(),
  });
