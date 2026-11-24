import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Links4InsightsApi = {
  /** Link to current page */
  self: string;
  /** Link to next page (if available) */
  next?: string;
  /** Link to previous page (if available) */
  prev?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const links4InsightsApiProperties: s.Shape<Links4InsightsApi> = {
  self: s.string(),
  next: s.optional(s.string()),
  prev: s.optional(s.string()),
};

export const links4InsightsApiInternalSchema: Schema<Links4InsightsApi> = s.object<Links4InsightsApi>(
  links4InsightsApiProperties,
  { additionalProperties: s.json() },
);

export const links4InsightsApiSchema: Schema<Links4InsightsApi> = s.lazySchema(() =>
  s.object<Links4InsightsApi>(
    {
      ...links4InsightsApiProperties,
      self: s.string().check(s.url()),
      next: s.optional(s.string().check(s.url())),
      prev: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
