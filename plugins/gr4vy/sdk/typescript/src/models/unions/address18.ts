import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The first line of the address. */
export type Address18 = string;

export const address18Schema: Schema<Address18> = s.of<Address18>(s.union([s.string()]));
