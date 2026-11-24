import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { data3EnrichApiSchema, type Data3EnrichApi } from "./data3-enrich-api.js";

export type ReportsTypes404Error = {
  /** Unique identifier for this particular occurrence of the problem. */
  correlationId: string;
  /** Error data. */
  data: Data3EnrichApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reportsTypes404ErrorSchema: Schema<ReportsTypes404Error> = s.object<ReportsTypes404Error>(
  {
    correlationId: s.string(),
    data: s.array(s.lazy(() => data3EnrichApiSchema)),
  },
  { additionalProperties: s.json() },
);
