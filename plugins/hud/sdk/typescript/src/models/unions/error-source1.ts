import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { errorSourceSchema, type ErrorSource } from "../error-source.js";

export type ErrorSource1 = ErrorSource;

export const errorSource1Schema: Schema<ErrorSource1> = s.of<ErrorSource1>(
  s.union([s.lazy(() => errorSourceSchema)]),
);
