import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The payment cryptogram for the network token. */
export type Cryptogram1 = string;

export const cryptogram1Schema: Schema<Cryptogram1> = s.of<Cryptogram1>(s.union([s.string()]));
