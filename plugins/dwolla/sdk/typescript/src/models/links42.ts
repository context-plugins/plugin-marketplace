import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customer2Schema, type Customer2 } from "./customer2.js";

export type Links42 = {
  customer: Customer2;
};

export const links42Schema: Schema<Links42> = s.object<Links42>({
  customer: customer2Schema,
});
