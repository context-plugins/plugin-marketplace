import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data6Schema, type Data6 } from "./data6.js";

export type V1OracleFeedsHistoryResponse = {
  data: Data6;
};

export const v1OracleFeedsHistoryResponseSchema: Schema<V1OracleFeedsHistoryResponse> =
  s.object<V1OracleFeedsHistoryResponse>({
    data: data6Schema,
  });
