import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { fieldBasisSchema, type FieldBasis } from "../field-basis.js";

/** List of FieldBasis objects supporting the output. */
export type Basis = FieldBasis[];

export const basisSchema: Schema<Basis> = s.of<Basis>(s.union([s.array(s.lazy(() => fieldBasisSchema))]));
