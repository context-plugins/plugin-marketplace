import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Idempotenthint = boolean;

export const idempotenthintSchema: Schema<Idempotenthint> = s.of<Idempotenthint>(s.union([s.boolean()]));
