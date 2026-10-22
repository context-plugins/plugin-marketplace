import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { responseFormatSchema, type ResponseFormat } from "./response-format.js";

export type B64ImageItem = {
  /** The seed used during image generation. */
  seed: number;
  /** The format of the generated image. One of `url(default)`, `raw`, `png`, `jpeg`, and `jpg`. */
  responseFormat: ResponseFormat;
  /** The base64-encoded JSON of the generated image. */
  b64Json: Uint8Array;
};

export const b64ImageItemSchema: Schema<B64ImageItem> = s.object<B64ImageItem>({
  seed: s.int(),
  responseFormat: responseFormatSchema,
  b64Json: s.bytes(),
  _keysMap: {
    responseFormat: "response_format",
    b64Json: "b64_json",
  },
});
