import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customers1Schema, type Customers1 } from "./customers1.js";
import { self6Schema, type Self6 } from "./self6.js";

export type Links27 = {
  self: Self6;
  customers: Customers1;
};

export const links27Schema: Schema<Links27> = s.object<Links27>({
  self: self6Schema,
  customers: customers1Schema,
});
