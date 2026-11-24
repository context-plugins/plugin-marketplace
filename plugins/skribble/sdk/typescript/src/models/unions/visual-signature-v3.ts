import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  formFieldSkribbleSignatureApiSchema,
  type FormFieldSkribbleSignatureApi,
} from "../form-field-skribble-signature-api.js";
import { multiplePositionsSchema, type MultiplePositions } from "../multiple-positions.js";

/** Visual signature placement information. */
export type VisualSignatureV3 = MultiplePositions | FormFieldSkribbleSignatureApi;

export const visualSignatureV3Schema: Schema<VisualSignatureV3> = s.of<VisualSignatureV3>(
  s.union([s.lazy(() => multiplePositionsSchema), s.lazy(() => formFieldSkribbleSignatureApiSchema)]),
);
