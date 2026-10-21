import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The ecommerce indicator for the token. */
export type Eci = string;

export const eciSchema: Schema<Eci> = s.of<Eci>(s.union([s.string()]));
