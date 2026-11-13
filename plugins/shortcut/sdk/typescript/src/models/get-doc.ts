import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { contentFormat1Schema, type ContentFormat1 } from "./content-format1.js";

export type GetDoc = {
  /**
   * Default content_format: markdown. Format of the content to return. If 'html', includes HTML
   * content in response.
   */
  contentFormat?: ContentFormat1;
};

export const getDocSchema: Schema<GetDoc> = s.object<GetDoc>({
  contentFormat: s.optional(s.lazy(() => contentFormat1Schema)),
  _keysMap: {
    contentFormat: "content_format",
  },
});
