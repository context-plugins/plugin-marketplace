import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { filterSchema, type Filter } from "./filter.js";

export type ReportsRequest = {
  reportType: string;
  title: string;
  filters: Filter[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reportsRequestSchema: Schema<ReportsRequest> = s.object<ReportsRequest>(
  {
    reportType: s.string(),
    title: s.string(),
    filters: s.array(s.lazy(() => filterSchema)),
  },
  { additionalProperties: s.json() },
);
