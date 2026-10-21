import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { responseFormat11ModelSchema, type ResponseFormat11Model } from "./response-format11-model.js";

export type ResponseFormat1Model = ResponseFormat11Model;

export const responseFormat1ModelSchema: Schema<ResponseFormat1Model> = s.of<ResponseFormat1Model>(
  s.union([s.lazy(() => responseFormat11ModelSchema)]),
);
