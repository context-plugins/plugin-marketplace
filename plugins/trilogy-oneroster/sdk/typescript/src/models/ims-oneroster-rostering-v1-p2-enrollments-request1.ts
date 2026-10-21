import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { enrollment5Schema, type Enrollment5 } from "./enrollment5.js";

export type ImsOnerosterRosteringV1P2EnrollmentsRequest1 = {
  enrollment: Enrollment5;
};

export const imsOnerosterRosteringV1P2EnrollmentsRequest1Schema: Schema<ImsOnerosterRosteringV1P2EnrollmentsRequest1> =
  s.object<ImsOnerosterRosteringV1P2EnrollmentsRequest1>({
    enrollment: enrollment5Schema,
  });
