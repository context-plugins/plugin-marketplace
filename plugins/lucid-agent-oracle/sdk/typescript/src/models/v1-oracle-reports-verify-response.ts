import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data7Schema, type Data7 } from "./data7.js";

export type V1OracleReportsVerifyResponse = {
  data: Data7;
};

export const v1OracleReportsVerifyResponseSchema: Schema<V1OracleReportsVerifyResponse> =
  s.object<V1OracleReportsVerifyResponse>({
    data: data7Schema,
  });
