import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  item1BundleSocialTeamApiInternalSchema,
  item1BundleSocialTeamApiSchema,
  type Item1BundleSocialTeamApi,
} from "./item1-bundle-social-team-api.js";

export type ApiV1TeamResponse3 = {
  items: Item1BundleSocialTeamApi[];
  total: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1TeamResponse3Properties: s.Shape<ApiV1TeamResponse3> = {
  items: s.array(s.lazy(() => item1BundleSocialTeamApiInternalSchema)),
  total: s.float64(),
};

export const apiV1TeamResponse3InternalSchema: Schema<ApiV1TeamResponse3> = s.object<ApiV1TeamResponse3>(
  apiV1TeamResponse3Properties,
  { additionalProperties: s.json() },
);

export const apiV1TeamResponse3Schema: Schema<ApiV1TeamResponse3> = s.lazySchema(() =>
  s.object<ApiV1TeamResponse3>(
    {
      ...apiV1TeamResponse3Properties,
      items: s.array(s.lazy(() => item1BundleSocialTeamApiSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
