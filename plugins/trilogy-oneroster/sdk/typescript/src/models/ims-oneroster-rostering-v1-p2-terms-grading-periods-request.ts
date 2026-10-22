import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { academicSession7Schema, type AcademicSession7 } from "./academic-session7.js";

export type ImsOnerosterRosteringV1P2TermsGradingPeriodsRequest = {
  academicSession: AcademicSession7;
};

export const imsOnerosterRosteringV1P2TermsGradingPeriodsRequestSchema: Schema<ImsOnerosterRosteringV1P2TermsGradingPeriodsRequest> =
  s.object<ImsOnerosterRosteringV1P2TermsGradingPeriodsRequest>({
    academicSession: academicSession7Schema,
  });
