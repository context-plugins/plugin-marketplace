import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { academicSession5Schema, type AcademicSession5 } from "./academic-session5.js";

export type ImsOnerosterRosteringV1P2GradingPeriodsRequest = {
  academicSession: AcademicSession5;
};

export const imsOnerosterRosteringV1P2GradingPeriodsRequestSchema: Schema<ImsOnerosterRosteringV1P2GradingPeriodsRequest> =
  s.object<ImsOnerosterRosteringV1P2GradingPeriodsRequest>({
    academicSession: academicSession5Schema,
  });
