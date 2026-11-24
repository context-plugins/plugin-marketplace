import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { errorSchema } from "../error.js";

export type ApiV1EditsResponse11 = unknown;

export const apiV1EditsResponse11Schema: Schema<ApiV1EditsResponse11> = s.of<ApiV1EditsResponse11>(
  s.union([s.lazy(() => errorSchema), s.unknown()]),
);
