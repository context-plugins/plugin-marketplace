import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GeographicDetail = {
  country?: string;
  zipcode?: string;
  /** Radius in miles. */
  distance?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const geographicDetailSchema: Schema<GeographicDetail> = s.object<GeographicDetail>(
  {
    country: s.optional(s.string()),
    zipcode: s.optional(s.string()),
    distance: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
