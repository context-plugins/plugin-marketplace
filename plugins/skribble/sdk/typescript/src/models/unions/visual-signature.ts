import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { formFieldSchema, type FormField } from "../form-field.js";
import { multiplePositionsSchema, type MultiplePositions } from "../multiple-positions.js";
import { singlePositionSchema, type SinglePosition } from "../single-position.js";

/** Visual signature placement information. */
export type VisualSignature = SinglePosition | MultiplePositions | FormField;

export const visualSignatureSchema: Schema<VisualSignature> = s.of<VisualSignature>(
  s.union([
    s.lazy(() => singlePositionSchema),
    s.lazy(() => multiplePositionsSchema),
    s.lazy(() => formFieldSchema),
  ]),
);
