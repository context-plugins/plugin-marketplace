import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { enrollment4Schema, type Enrollment4 } from "./enrollment4.js";

export type ImsOnerosterRosteringV1P2EnrollmentsRequest = {
  enrollment: Enrollment4;
};

export const imsOnerosterRosteringV1P2EnrollmentsRequestSchema: Schema<ImsOnerosterRosteringV1P2EnrollmentsRequest> =
  s.object<ImsOnerosterRosteringV1P2EnrollmentsRequest>({
    enrollment: enrollment4Schema,
  });
