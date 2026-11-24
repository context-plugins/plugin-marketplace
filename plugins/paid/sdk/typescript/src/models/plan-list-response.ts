import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { paginationSchema, type Pagination } from "./pagination.js";
import { plan1Schema, type Plan1 } from "./plan1.js";

export type PlanListResponse = {
  data: Plan1[];
  pagination: Pagination;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const planListResponseSchema: Schema<PlanListResponse> = s.object<PlanListResponse>(
  {
    data: s.array(s.lazy(() => plan1Schema)),
    pagination: paginationSchema,
  },
  { additionalProperties: s.json() },
);
