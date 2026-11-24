import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { funderTypeSchema, type FunderType } from "../funder-type.js";

export type FunderType1 = FunderType;

export const funderType1Schema: Schema<FunderType1> = s.of<FunderType1>(
  s.union([s.lazy(() => funderTypeSchema)]),
);
