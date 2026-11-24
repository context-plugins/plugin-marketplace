import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { detectTextFiltersSchema, type DetectTextFilters } from "./detect-text-filters.js";
import { imageSchema, type Image } from "./image.js";

export type DetectTextRequest = {
  image: Image;
  filters?: DetectTextFilters;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const detectTextRequestSchema: Schema<DetectTextRequest> = s.object<DetectTextRequest>(
  {
    image: imageSchema,
    filters: s.optional(s.lazy(() => detectTextFiltersSchema)),
    _keysMap: {
      image: "Image",
      filters: "Filters",
    },
  },
  { additionalProperties: s.json() },
);
