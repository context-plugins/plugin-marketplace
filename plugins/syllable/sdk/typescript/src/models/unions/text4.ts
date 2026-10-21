import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The text of the message */
export type Text4 = string;

export const text4Schema: Schema<Text4> = s.of<Text4>(s.union([s.string()]));
