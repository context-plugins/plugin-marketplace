import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MetaZillapiZillowPropertyDataPropertiesApi = {
  count?: number;
  photoCount?: number;
  has3D?: boolean;
  hasVideo?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const metaZillapiZillowPropertyDataPropertiesApiSchema: Schema<MetaZillapiZillowPropertyDataPropertiesApi> =
  s.object<MetaZillapiZillowPropertyDataPropertiesApi>(
    {
      count: s.optional(s.int()),
      photoCount: s.optional(s.int()),
      has3D: s.optional(s.boolean()),
      hasVideo: s.optional(s.boolean()),
      _keysMap: {
        photoCount: "photo_count",
        has3D: "has_3d",
        hasVideo: "has_video",
      },
    },
    { additionalProperties: s.json() },
  );
