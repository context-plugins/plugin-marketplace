import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { classSchema, type Class } from "./class.js";

export type ImsOnerosterRosteringV1P2ClassesResponse = {
  classes: Class[];
  totalCount: number;
  pageCount: number;
  pageNumber: number;
  offset: number;
  limit: number;
};

export const imsOnerosterRosteringV1P2ClassesResponseSchema: Schema<ImsOnerosterRosteringV1P2ClassesResponse> =
  s.object<ImsOnerosterRosteringV1P2ClassesResponse>({
    classes: s.array(s.lazy(() => classSchema)),
    totalCount: s.float64(),
    pageCount: s.float64(),
    pageNumber: s.float64(),
    offset: s.float64(),
    limit: s.float64(),
  });
