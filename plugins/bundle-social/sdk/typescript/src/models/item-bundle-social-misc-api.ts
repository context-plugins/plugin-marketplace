import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { defaultInternalSchema, defaultSchema, type Default } from "./default.js";
import { highInternalSchema, highSchema, type High } from "./high.js";
import { maxresInternalSchema, maxresSchema, type Maxres } from "./maxres.js";
import { mediumInternalSchema, mediumSchema, type Medium } from "./medium.js";
import { standardInternalSchema, standardSchema, type Standard } from "./standard.js";

export type ItemBundleSocialMiscApi = {
  default?: Default;
  medium?: Medium;
  high?: High;
  standard?: Standard;
  maxres?: Maxres;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const itemBundleSocialMiscApiProperties: s.Shape<ItemBundleSocialMiscApi> = {
  default: s.optional(s.lazy(() => defaultInternalSchema)),
  medium: s.optional(s.lazy(() => mediumInternalSchema)),
  high: s.optional(s.lazy(() => highInternalSchema)),
  standard: s.optional(s.lazy(() => standardInternalSchema)),
  maxres: s.optional(s.lazy(() => maxresInternalSchema)),
};

export const itemBundleSocialMiscApiInternalSchema: Schema<ItemBundleSocialMiscApi> =
  s.object<ItemBundleSocialMiscApi>(itemBundleSocialMiscApiProperties, { additionalProperties: s.json() });

export const itemBundleSocialMiscApiSchema: Schema<ItemBundleSocialMiscApi> = s.lazySchema(() =>
  s.object<ItemBundleSocialMiscApi>(
    {
      ...itemBundleSocialMiscApiProperties,
      default: s.optional(s.lazy(() => defaultSchema)),
      medium: s.optional(s.lazy(() => mediumSchema)),
      high: s.optional(s.lazy(() => highSchema)),
      standard: s.optional(s.lazy(() => standardSchema)),
      maxres: s.optional(s.lazy(() => maxresSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
