import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { academicSession14Schema, type AcademicSession14 } from "./academic-session14.js";

export type ImsOnerosterRosteringV1P2AcademicSessionsRequest = {
  academicSession: AcademicSession14;
};

export const imsOnerosterRosteringV1P2AcademicSessionsRequestSchema: Schema<ImsOnerosterRosteringV1P2AcademicSessionsRequest> =
  s.object<ImsOnerosterRosteringV1P2AcademicSessionsRequest>({
    academicSession: academicSession14Schema,
  });
