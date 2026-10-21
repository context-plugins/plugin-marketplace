import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Customer's document number */
export type Fiscalnumber = string;

export const fiscalnumberSchema: Schema<Fiscalnumber> = s.of<Fiscalnumber>(s.union([s.string()]));
