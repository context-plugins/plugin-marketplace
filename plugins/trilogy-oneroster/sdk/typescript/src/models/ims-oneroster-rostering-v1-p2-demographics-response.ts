import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { demographicsSchema, type Demographics } from "./demographics.js";

export type ImsOnerosterRosteringV1P2DemographicsResponse = {
  demographics: Demographics[];
  totalCount: number;
  pageCount: number;
  pageNumber: number;
  offset: number;
  limit: number;
};

export const imsOnerosterRosteringV1P2DemographicsResponseSchema: Schema<ImsOnerosterRosteringV1P2DemographicsResponse> =
  s.object<ImsOnerosterRosteringV1P2DemographicsResponse>({
    demographics: s.array(s.lazy(() => demographicsSchema)),
    totalCount: s.float64(),
    pageCount: s.float64(),
    pageNumber: s.float64(),
    offset: s.float64(),
    limit: s.float64(),
  });
