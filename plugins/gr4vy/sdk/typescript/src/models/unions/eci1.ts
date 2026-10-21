import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Eci1 = string;

export const eci1Schema: Schema<Eci1> = s.of<Eci1>(s.union([s.string()]));
