import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { apiColorIdSchema, type ApiColorId } from "../api-color-id.js";
import { apiColorId1Schema, type ApiColorId1 } from "../api-color-id1.js";

export type ApiColorId2 = ApiColorId | ApiColorId1;

export const apiColorId2Schema: Schema<ApiColorId2> = s.of<ApiColorId2>(
  s.union([s.lazy(() => apiColorIdSchema), s.lazy(() => apiColorId1Schema)]),
);
