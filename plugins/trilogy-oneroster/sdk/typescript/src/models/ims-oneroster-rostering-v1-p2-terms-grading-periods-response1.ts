import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { academicSessionSchema, type AcademicSession } from "./academic-session.js";

export type ImsOnerosterRosteringV1P2TermsGradingPeriodsResponse1 = {
  /** Represents an academic session. */
  academicSession: AcademicSession;
};

export const imsOnerosterRosteringV1P2TermsGradingPeriodsResponse1Schema: Schema<ImsOnerosterRosteringV1P2TermsGradingPeriodsResponse1> =
  s.object<ImsOnerosterRosteringV1P2TermsGradingPeriodsResponse1>({
    academicSession: academicSessionSchema,
  });
