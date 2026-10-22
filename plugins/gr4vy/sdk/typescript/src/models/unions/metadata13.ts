import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Additional metadata for the transaction in JSON format */
export type Metadata13 = string;

export const metadata13Schema: Schema<Metadata13> = s.of<Metadata13>(s.union([s.string()]));
