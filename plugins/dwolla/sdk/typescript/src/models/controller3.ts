import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { address1Schema, type Address1 } from "./address1.js";

export type Controller3 = {
  firstName: string;
  lastName: string;
  title: string;
  ssn?: string;
  dateOfBirth: string;
  address: Address1;
};

export const controller3Schema: Schema<Controller3> = s.object<Controller3>({
  firstName: s.string(),
  lastName: s.string(),
  title: s.string(),
  ssn: s.optional(s.string()),
  dateOfBirth: s.string(),
  address: address1Schema,
});
