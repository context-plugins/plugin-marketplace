import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { responseFormat1Schema, type ResponseFormat1 } from "../response-format1.js";

/** The format in which the generated image will be returned. One of `raw` and `jpeg`. */
export type ResponseFormat11 = ResponseFormat1;

export const responseFormat11Schema: Schema<ResponseFormat11> = s.of<ResponseFormat11>(
  s.union([s.lazy(() => responseFormat1Schema)]),
);
