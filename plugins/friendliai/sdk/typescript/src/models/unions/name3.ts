import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** An optional name of the tool call corresponding to this message. */
export type Name3 = string;

export const name3Schema: Schema<Name3> = s.of<Name3>(s.union([s.string()]));
