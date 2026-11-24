import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { incompleteDetailsSchema, type IncompleteDetails } from "../incomplete-details.js";

export type IncompleteDetails1 = IncompleteDetails;

export const incompleteDetails1Schema: Schema<IncompleteDetails1> = s.of<IncompleteDetails1>(
  s.union([s.lazy(() => incompleteDetailsSchema)]),
);
