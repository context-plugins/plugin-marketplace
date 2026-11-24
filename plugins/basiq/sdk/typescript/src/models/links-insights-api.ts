import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** For multi-user insights the self link uses the first userId from the users array. */
export type LinksInsightsApi = {
  /** Self link pointing to /users/{firstUserId}/insights/{insightId} */
  self: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const linksInsightsApiProperties: s.Shape<LinksInsightsApi> = {
  self: s.string(),
};

export const linksInsightsApiInternalSchema: Schema<LinksInsightsApi> = s.object<LinksInsightsApi>(
  linksInsightsApiProperties,
  { additionalProperties: s.json() },
);

export const linksInsightsApiSchema: Schema<LinksInsightsApi> = s.lazySchema(() =>
  s.object<LinksInsightsApi>(
    {
      ...linksInsightsApiProperties,
      self: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
