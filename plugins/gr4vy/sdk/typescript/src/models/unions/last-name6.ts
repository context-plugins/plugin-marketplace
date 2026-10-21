import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Last name of the recipient at this address. */
export type LastName6 = string;

export const lastName6Schema: Schema<LastName6> = s.of<LastName6>(s.union([s.string()]));
