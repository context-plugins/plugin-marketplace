import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** 8 for proofs without external_cost_hash, 10 for proofs with it. */
export const FieldsSigned = {
  _8: 8,
  _10: 10,
} as const;
export type FieldsSigned = (typeof FieldsSigned)[keyof typeof FieldsSigned] | (number & {});

export const fieldsSignedSchema: EnumSchema<FieldsSigned> = s.enumOf<FieldsSigned>(FieldsSigned);
