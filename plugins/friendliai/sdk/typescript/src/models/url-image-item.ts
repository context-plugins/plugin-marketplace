import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { responseFormatSchema, type ResponseFormat } from "./response-format.js";

export type UrlImageItem = {
  /** The seed used during image generation. */
  seed: number;
  /** The format of the generated image. One of `url(default)`, `raw`, `png`, `jpeg`, and `jpg`. */
  responseFormat: ResponseFormat;
  /** The URL of the generated image. */
  url: string;
};

export const urlImageItemSchema: Schema<UrlImageItem> = s.object<UrlImageItem>({
  seed: s.int(),
  responseFormat: responseFormatSchema,
  url: s.string(),
  _keysMap: {
    responseFormat: "response_format",
  },
});
