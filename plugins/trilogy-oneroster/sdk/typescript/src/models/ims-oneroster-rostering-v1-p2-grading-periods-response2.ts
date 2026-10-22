import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { academicSessionSchema, type AcademicSession } from "./academic-session.js";

export type ImsOnerosterRosteringV1P2GradingPeriodsResponse2 = {
  /** Represents an academic session. */
  gradingPeriod: AcademicSession;
};

export const imsOnerosterRosteringV1P2GradingPeriodsResponse2Schema: Schema<ImsOnerosterRosteringV1P2GradingPeriodsResponse2> =
  s.object<ImsOnerosterRosteringV1P2GradingPeriodsResponse2>({
    gradingPeriod: academicSessionSchema,
  });
