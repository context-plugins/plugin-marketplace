import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { default1InternalSchema, default1Schema, type Default1 } from "./default1.js";
import { high1InternalSchema, high1Schema, type High1 } from "./high1.js";
import { maxres1InternalSchema, maxres1Schema, type Maxres1 } from "./maxres1.js";
import { medium1InternalSchema, medium1Schema, type Medium1 } from "./medium1.js";
import { standard1InternalSchema, standard1Schema, type Standard1 } from "./standard1.js";

export type Thumbnails = {
  default?: Default1;
  medium?: Medium1;
  high?: High1;
  standard?: Standard1;
  maxres?: Maxres1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const thumbnailsProperties: s.Shape<Thumbnails> = {
  default: s.optional(s.lazy(() => default1InternalSchema)),
  medium: s.optional(s.lazy(() => medium1InternalSchema)),
  high: s.optional(s.lazy(() => high1InternalSchema)),
  standard: s.optional(s.lazy(() => standard1InternalSchema)),
  maxres: s.optional(s.lazy(() => maxres1InternalSchema)),
};

export const thumbnailsInternalSchema: Schema<Thumbnails> = s.object<Thumbnails>(thumbnailsProperties, {
  additionalProperties: s.json(),
});

export const thumbnailsSchema: Schema<Thumbnails> = s.lazySchema(() =>
  s.object<Thumbnails>(
    {
      ...thumbnailsProperties,
      default: s.optional(s.lazy(() => default1Schema)),
      medium: s.optional(s.lazy(() => medium1Schema)),
      high: s.optional(s.lazy(() => high1Schema)),
      standard: s.optional(s.lazy(() => standard1Schema)),
      maxres: s.optional(s.lazy(() => maxres1Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
