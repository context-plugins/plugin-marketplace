import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Customer's document type */
export type Userfisnumber = string;

export const userfisnumberSchema: Schema<Userfisnumber> = s.of<Userfisnumber>(s.union([s.string()]));
