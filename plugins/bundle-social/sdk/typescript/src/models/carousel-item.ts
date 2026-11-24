import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tagged1InternalSchema, tagged1Schema, type Tagged1 } from "./tagged1.js";

export type CarouselItem = {
  uploadId: string;
  altText?: string | null;
  tagged?: Tagged1[] | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const carouselItemProperties: s.Shape<CarouselItem> = {
  uploadId: s.string(),
  altText: s.optionalNullable(s.string()),
  tagged: s.optionalNullable(s.array(s.lazy(() => tagged1InternalSchema))),
};

export const carouselItemInternalSchema: Schema<CarouselItem> = s.object<CarouselItem>(
  carouselItemProperties,
  { additionalProperties: s.json() },
);

export const carouselItemSchema: Schema<CarouselItem> = s.lazySchema(() =>
  s.object<CarouselItem>(
    {
      ...carouselItemProperties,
      tagged: s.optionalNullable(s.array(s.lazy(() => tagged1Schema))),
    },
    { additionalProperties: s.json() },
  ),
);
