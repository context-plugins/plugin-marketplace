import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Name of the organization or entity at the address. */
export type Name3 = string;

export const name3Schema: Schema<Name3> = s.of<Name3>(s.union([s.string()]));
