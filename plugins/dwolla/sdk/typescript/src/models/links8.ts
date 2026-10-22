import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { exchange2Schema, type Exchange2 } from "./exchange2.js";

export type Links8 = {
  exchange: Exchange2;
};

export const links8Schema: Schema<Links8> = s.object<Links8>({
  exchange: exchange2Schema,
});
