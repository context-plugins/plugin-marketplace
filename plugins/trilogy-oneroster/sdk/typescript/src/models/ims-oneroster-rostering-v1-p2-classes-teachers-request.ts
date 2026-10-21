import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { enrollment1Schema, type Enrollment1 } from "./enrollment1.js";

export type ImsOnerosterRosteringV1P2ClassesTeachersRequest = {
  enrollment: Enrollment1;
};

export const imsOnerosterRosteringV1P2ClassesTeachersRequestSchema: Schema<ImsOnerosterRosteringV1P2ClassesTeachersRequest> =
  s.object<ImsOnerosterRosteringV1P2ClassesTeachersRequest>({
    enrollment: enrollment1Schema,
  });
