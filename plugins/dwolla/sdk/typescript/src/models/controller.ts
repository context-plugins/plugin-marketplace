import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";

export type Controller = {
  firstName: string;
  lastName: string;
  title: string;
  address: Address;
};

export const controllerSchema: Schema<Controller> = s.object<Controller>({
  firstName: s.string(),
  lastName: s.string(),
  title: s.string(),
  address: addressSchema,
});
