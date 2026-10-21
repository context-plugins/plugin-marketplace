import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { report2Schema, type Report2 } from "./report2.js";

export type V1OracleReportsVerifyRequest = {
  report: Report2;
};

export const v1OracleReportsVerifyRequestSchema: Schema<V1OracleReportsVerifyRequest> =
  s.object<V1OracleReportsVerifyRequest>({
    report: report2Schema,
  });
