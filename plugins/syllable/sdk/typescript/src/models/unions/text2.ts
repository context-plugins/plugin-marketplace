import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Content of the message */
export type Text2 = string;

export const text2Schema: Schema<Text2> = s.of<Text2>(s.union([s.string()]));
