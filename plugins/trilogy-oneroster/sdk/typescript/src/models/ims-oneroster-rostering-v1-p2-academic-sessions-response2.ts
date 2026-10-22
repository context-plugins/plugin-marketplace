import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { academicSessionSchema, type AcademicSession } from "./academic-session.js";

export type ImsOnerosterRosteringV1P2AcademicSessionsResponse2 = {
  /** Represents an academic session. */
  academicSession: AcademicSession;
};

export const imsOnerosterRosteringV1P2AcademicSessionsResponse2Schema: Schema<ImsOnerosterRosteringV1P2AcademicSessionsResponse2> =
  s.object<ImsOnerosterRosteringV1P2AcademicSessionsResponse2>({
    academicSession: academicSessionSchema,
  });
