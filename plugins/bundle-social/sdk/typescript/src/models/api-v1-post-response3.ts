import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  item1BundleSocialPostApiInternalSchema,
  item1BundleSocialPostApiSchema,
  type Item1BundleSocialPostApi,
} from "./item1-bundle-social-post-api.js";

export type ApiV1PostResponse3 = {
  items: Item1BundleSocialPostApi[];
  total: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1PostResponse3Properties: s.Shape<ApiV1PostResponse3> = {
  items: s.array(s.lazy(() => item1BundleSocialPostApiInternalSchema)),
  total: s.float64(),
};

export const apiV1PostResponse3InternalSchema: Schema<ApiV1PostResponse3> = s.object<ApiV1PostResponse3>(
  apiV1PostResponse3Properties,
  { additionalProperties: s.json() },
);

export const apiV1PostResponse3Schema: Schema<ApiV1PostResponse3> = s.lazySchema(() =>
  s.object<ApiV1PostResponse3>(
    {
      ...apiV1PostResponse3Properties,
      items: s.array(s.lazy(() => item1BundleSocialPostApiSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
