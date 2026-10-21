import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { classSchema, type Class } from "./class.js";

export type ImsOnerosterRosteringV1P2ClassesResponse2 = {
  /** Represents a class. */
  class: Class;
};

export const imsOnerosterRosteringV1P2ClassesResponse2Schema: Schema<ImsOnerosterRosteringV1P2ClassesResponse2> =
  s.object<ImsOnerosterRosteringV1P2ClassesResponse2>({
    class: classSchema,
  });
