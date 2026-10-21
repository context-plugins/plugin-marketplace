import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { packRequestBodySchema, type PackRequestBody } from "../pack-request-body.js";
import { packRequestBody1Schema, type PackRequestBody1 } from "../pack-request-body1.js";

export type PackRequestBody2 = PackRequestBody | PackRequestBody1;

export const packRequestBody2Schema: Schema<PackRequestBody2> = s.of<PackRequestBody2>(
  s.union([s.lazy(() => packRequestBodySchema), s.lazy(() => packRequestBody1Schema)]),
);
