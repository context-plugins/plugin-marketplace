import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Accepts a `string` value. */
export type MetaImageAltText = {
  /** @default "meta_image_alt_text" */
  name?: "meta_image_alt_text";
  value?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const metaImageAltTextSchema: Schema<MetaImageAltText> = s.object<MetaImageAltText>(
  {
    name: s.defaulted(s.literal("meta_image_alt_text"), "meta_image_alt_text"),
    value: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
