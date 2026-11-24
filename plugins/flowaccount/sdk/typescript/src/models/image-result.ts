import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ImageResult = {
  companyId?: number;
  fileName?: string | null;
  url?: string | null;
  previewUrl?: string | null;
  thumbUrl?: string | null;
};

export const imageResultSchema: Schema<ImageResult> = s.object<ImageResult>({
  companyId: s.optional(s.int()),
  fileName: s.optionalNullable(s.string()),
  url: s.optionalNullable(s.string()),
  previewUrl: s.optionalNullable(s.string()),
  thumbUrl: s.optionalNullable(s.string()),
  _keysMap: {
    previewUrl: "previewURL",
    thumbUrl: "thumbURL",
  },
});
