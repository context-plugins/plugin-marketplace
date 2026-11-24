import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Nextafter = number;

export const nextafterSchema: Schema<Nextafter> = s.of<Nextafter>(s.union([s.int()]));
