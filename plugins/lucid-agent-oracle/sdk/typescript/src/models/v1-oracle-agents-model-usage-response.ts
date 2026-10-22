import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dataSchema, type Data } from "./data.js";

export type V1OracleAgentsModelUsageResponse = {
  data: Data;
};

export const v1OracleAgentsModelUsageResponseSchema: Schema<V1OracleAgentsModelUsageResponse> =
  s.object<V1OracleAgentsModelUsageResponse>({
    data: dataSchema,
  });
