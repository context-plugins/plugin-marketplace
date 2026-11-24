import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { contentFormatSchema, type ContentFormat } from "./content-format.js";

export type GetDoc = {
  /**
   * Format of the content to return. Defaults to 'markdown'. If 'html', includes HTML content in
   * response.
   */
  contentFormat?: ContentFormat;
};

export const getDocSchema: Schema<GetDoc> = s.object<GetDoc>({
  contentFormat: s.optional(s.lazy(() => contentFormatSchema)),
  _keysMap: {
    contentFormat: "content_format",
  },
});
