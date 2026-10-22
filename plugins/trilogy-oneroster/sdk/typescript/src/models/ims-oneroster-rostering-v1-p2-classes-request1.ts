import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { class18Schema, type Class18 } from "./class18.js";

export type ImsOnerosterRosteringV1P2ClassesRequest1 = {
  class: Class18;
};

export const imsOnerosterRosteringV1P2ClassesRequest1Schema: Schema<ImsOnerosterRosteringV1P2ClassesRequest1> =
  s.object<ImsOnerosterRosteringV1P2ClassesRequest1>({
    class: class18Schema,
  });
