import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The bank code of the selected bank */
export type Bankcode = string;

export const bankcodeSchema: Schema<Bankcode> = s.of<Bankcode>(s.union([s.string()]));
