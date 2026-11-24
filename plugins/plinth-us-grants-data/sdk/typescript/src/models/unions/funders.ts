import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Funders = number;

export const fundersSchema: Schema<Funders> = s.of<Funders>(s.union([s.int()]));
