import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Configuration for media_url expiration. */
export type MediaUrlConfig = {
  /** Optional expiration time in seconds (1h-24h). Defaults to 12h if not specified. */
  expireIn?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const mediaUrlConfigProperties: s.Shape<MediaUrlConfig> = {
  expireIn: s.optionalNullable(s.int()),
  _keysMap: {
    expireIn: "expire_in",
  },
};

export const mediaUrlConfigInternalSchema: Schema<MediaUrlConfig> = s.object<MediaUrlConfig>(
  mediaUrlConfigProperties,
  { additionalProperties: s.json() },
);

export const mediaUrlConfigSchema: Schema<MediaUrlConfig> = s.lazySchema(() =>
  s.object<MediaUrlConfig>(
    {
      ...mediaUrlConfigProperties,
      expireIn: s.optionalNullable(s.int().check(s.gte(3600), s.lte(86400))),
    },
    { additionalProperties: s.json() },
  ),
);
