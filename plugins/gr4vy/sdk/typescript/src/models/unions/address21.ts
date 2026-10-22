import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The second line of the address. */
export type Address21 = string;

export const address21Schema: Schema<Address21> = s.of<Address21>(s.union([s.string()]));
