import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data5Schema, type Data5 } from "./data5.js";

export type V1OracleProtocolsMetricsResponse = {
  data: Data5;
};

export const v1OracleProtocolsMetricsResponseSchema: Schema<V1OracleProtocolsMetricsResponse> =
  s.object<V1OracleProtocolsMetricsResponse>({
    data: data5Schema,
  });
