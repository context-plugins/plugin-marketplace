import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { data14Schema, type Data14 } from "./data14.js";

export type ReportsTypesResponse = {
  /** Report ID. */
  id?: string;
  /** Name of the report. */
  name?: string;
  /** Always "list". */
  type?: string;
  /** In depth consumer affordability assessment. */
  description?: string;
  /** Total count of report. */
  count?: number;
  /** filters for reports. */
  filters?: Record<string, unknown>[];
  data?: Data14[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reportsTypesResponseSchema: Schema<ReportsTypesResponse> = s.object<ReportsTypesResponse>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    type: s.optional(s.string()),
    description: s.optional(s.string()),
    count: s.optional(s.int()),
    filters: s.optional(s.array(s.record(s.string(), s.unknown()))),
    data: s.optional(s.array(s.lazy(() => data14Schema))),
  },
  { additionalProperties: s.json() },
);
