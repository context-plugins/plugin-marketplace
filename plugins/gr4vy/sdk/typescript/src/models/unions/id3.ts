import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The ID of the payment method. */
export type Id3 = string;

export const id3Schema: Schema<Id3> = s.of<Id3>(s.union([s.string()]));
