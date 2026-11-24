import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mimetypeSchema, type Mimetype } from "./unions/mimetype.js";
import { sizesSchema, type Sizes } from "./unions/sizes.js";

/** An icon for display in user interfaces. */
export type Icon = {
  src: string;
  mimeType?: Mimetype;
  sizes?: Sizes;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const iconSchema: Schema<Icon> = s.object<Icon>(
  {
    src: s.string(),
    mimeType: s.optional(s.lazy(() => mimetypeSchema)),
    sizes: s.optional(s.lazy(() => sizesSchema)),
  },
  { additionalProperties: s.json() },
);
