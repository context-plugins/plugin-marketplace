import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { orgSchema, type Org } from "./org.js";

export type ImsOnerosterRosteringV1P2OrgsResponse = {
  orgs: Org[];
  totalCount: number;
  pageCount: number;
  pageNumber: number;
  offset: number;
  limit: number;
};

export const imsOnerosterRosteringV1P2OrgsResponseSchema: Schema<ImsOnerosterRosteringV1P2OrgsResponse> =
  s.object<ImsOnerosterRosteringV1P2OrgsResponse>({
    orgs: s.array(s.lazy(() => orgSchema)),
    totalCount: s.float64(),
    pageCount: s.float64(),
    pageNumber: s.float64(),
    offset: s.float64(),
    limit: s.float64(),
  });
