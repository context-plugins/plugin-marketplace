import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Customer type ("N" for persona natural, "J" for persona jurídica) */
export type Usertype = string;

export const usertypeSchema: Schema<Usertype> = s.of<Usertype>(s.union([s.string()]));
