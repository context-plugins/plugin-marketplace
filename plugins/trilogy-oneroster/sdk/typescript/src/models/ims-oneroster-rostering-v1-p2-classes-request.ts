import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { class17Schema, type Class17 } from "./class17.js";

export type ImsOnerosterRosteringV1P2ClassesRequest = {
  class: Class17;
};

export const imsOnerosterRosteringV1P2ClassesRequestSchema: Schema<ImsOnerosterRosteringV1P2ClassesRequest> =
  s.object<ImsOnerosterRosteringV1P2ClassesRequest>({
    class: class17Schema,
  });
