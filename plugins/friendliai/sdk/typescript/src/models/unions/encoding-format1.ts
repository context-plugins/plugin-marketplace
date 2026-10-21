import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { encodingFormatSchema, type EncodingFormat } from "../encoding-format.js";

/**
 * The format to return the embeddings in. Can be either `float` or
 * [`base64`](https://pypi.org/project/pybase64/).
 */
export type EncodingFormat1 = EncodingFormat;

export const encodingFormat1Schema: Schema<EncodingFormat1> = s.of<EncodingFormat1>(
  s.union([s.lazy(() => encodingFormatSchema)]),
);
