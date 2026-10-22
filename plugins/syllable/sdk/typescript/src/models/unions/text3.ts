import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Message content (transcript events) */
export type Text3 = string;

export const text3Schema: Schema<Text3> = s.of<Text3>(s.union([s.string()]));
