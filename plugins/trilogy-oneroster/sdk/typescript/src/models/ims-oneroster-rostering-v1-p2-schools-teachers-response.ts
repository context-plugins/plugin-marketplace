import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { user1Schema, type User1 } from "./user1.js";

export type ImsOnerosterRosteringV1P2SchoolsTeachersResponse = {
  users: User1[];
  totalCount: number;
  pageCount: number;
  pageNumber: number;
  offset: number;
  limit: number;
};

export const imsOnerosterRosteringV1P2SchoolsTeachersResponseSchema: Schema<ImsOnerosterRosteringV1P2SchoolsTeachersResponse> =
  s.object<ImsOnerosterRosteringV1P2SchoolsTeachersResponse>({
    users: s.array(s.lazy(() => user1Schema)),
    totalCount: s.float64(),
    pageCount: s.float64(),
    pageNumber: s.float64(),
    offset: s.float64(),
    limit: s.float64(),
  });
