import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { enrollmentSchema, type Enrollment } from "./enrollment.js";

export type ImsOnerosterRosteringV1P2EnrollmentsResponse2 = {
  /** Represents an enrollment. */
  enrollment: Enrollment;
};

export const imsOnerosterRosteringV1P2EnrollmentsResponse2Schema: Schema<ImsOnerosterRosteringV1P2EnrollmentsResponse2> =
  s.object<ImsOnerosterRosteringV1P2EnrollmentsResponse2>({
    enrollment: enrollmentSchema,
  });
