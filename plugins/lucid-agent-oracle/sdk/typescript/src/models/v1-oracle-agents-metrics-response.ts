import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data1Schema, type Data1 } from "./data1.js";

export type V1OracleAgentsMetricsResponse = {
  data: Data1;
};

export const v1OracleAgentsMetricsResponseSchema: Schema<V1OracleAgentsMetricsResponse> =
  s.object<V1OracleAgentsMetricsResponse>({
    data: data1Schema,
  });
