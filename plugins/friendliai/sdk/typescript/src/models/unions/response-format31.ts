import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { responseFormat3Schema, type ResponseFormat3 } from "../response-format3.js";

/**
 * The format in which the generated image(s) will be returned. One of `url(default)`, `raw`, `png`,
 * `jpeg`, and `jpg`.
 */
export type ResponseFormat31 = ResponseFormat3;

export const responseFormat31Schema: Schema<ResponseFormat31> = s.of<ResponseFormat31>(
  s.union([s.lazy(() => responseFormat3Schema)]),
);
