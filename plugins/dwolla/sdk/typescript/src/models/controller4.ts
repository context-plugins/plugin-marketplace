import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { address1Schema, type Address1 } from "./address1.js";

export type Controller4 = {
  firstName: string;
  lastName: string;
  title: string;
  ssn: string;
  dateOfBirth: string;
  address: Address1;
};

export const controller4Schema: Schema<Controller4> = s.object<Controller4>({
  firstName: s.string(),
  lastName: s.string(),
  title: s.string(),
  ssn: s.string(),
  dateOfBirth: s.string(),
  address: address1Schema,
});
