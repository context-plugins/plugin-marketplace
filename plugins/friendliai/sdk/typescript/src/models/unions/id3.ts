import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The unique ID of the function tool call output. */
export type Id3 = string;

export const id3Schema: Schema<Id3> = s.of<Id3>(s.union([s.string()]));
