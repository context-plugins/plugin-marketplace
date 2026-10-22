import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { enrollment1Schema, type Enrollment1 } from "./enrollment1.js";

export type ImsOnerosterRosteringV1P2ClassesStudentsRequest = {
  enrollment: Enrollment1;
};

export const imsOnerosterRosteringV1P2ClassesStudentsRequestSchema: Schema<ImsOnerosterRosteringV1P2ClassesStudentsRequest> =
  s.object<ImsOnerosterRosteringV1P2ClassesStudentsRequest>({
    enrollment: enrollment1Schema,
  });
