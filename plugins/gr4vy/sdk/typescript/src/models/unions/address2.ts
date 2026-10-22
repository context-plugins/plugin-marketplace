import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Second line of the beneficiary's address. */
export type Address2 = string;

export const address2Schema: Schema<Address2> = s.of<Address2>(s.union([s.string()]));
