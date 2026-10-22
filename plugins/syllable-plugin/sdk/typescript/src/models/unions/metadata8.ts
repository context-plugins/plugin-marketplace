import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Metadata8 = string;

export const metadata8Schema: Schema<Metadata8> = s.of<Metadata8>(s.union([s.string()]));
