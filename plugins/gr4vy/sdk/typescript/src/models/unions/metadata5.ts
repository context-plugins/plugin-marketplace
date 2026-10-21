import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Metadata5 = string | boolean;

export const metadata5Schema: Schema<Metadata5> = s.of<Metadata5>(s.union([s.string(), s.boolean()]));
