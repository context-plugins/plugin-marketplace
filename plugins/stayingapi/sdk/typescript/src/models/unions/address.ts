import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Address = string;

export const addressSchema: Schema<Address> = s.of<Address>(s.union([s.string()]));
