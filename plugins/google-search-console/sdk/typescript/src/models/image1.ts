import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Screenshot of the requested URL. */
export type Image1 = {
  /**
   * Image data in format determined by the mime type. Currently, the format will always be
   * "image/png", but this might change in the future.
   */
  data?: string;
  /** The mime-type of the image data. */
  mimeType?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const image1Schema: Schema<Image1> = s.object<Image1>(
  {
    data: s.optional(s.string()),
    mimeType: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
