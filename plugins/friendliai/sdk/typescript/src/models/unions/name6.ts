import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The name of the endpoint. */
export type Name6 = string;

export const name6Schema: Schema<Name6> = s.of<Name6>(s.union([s.string()]));
