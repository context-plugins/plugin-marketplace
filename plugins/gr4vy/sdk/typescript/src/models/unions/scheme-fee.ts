import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The scheme fee, if applicable, in the smallest currency unit. */
export type SchemeFee = number;

export const schemeFeeSchema: Schema<SchemeFee> = s.of<SchemeFee>(s.union([s.int()]));
