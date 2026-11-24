import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  audienceOperatorWithAudienceMatchFilterInternalSchema,
  audienceOperatorWithAudienceMatchFilterSchema,
  type AudienceOperatorWithAudienceMatchFilter,
} from "./audience-operator-with-audience-match-filter.js";

export type TargetAudience = {
  /** Audience display name, must be set for project-level audiences. */
  name?: string;
  /** Audience filters, describing logic for segmenting users */
  filters: AudienceOperatorWithAudienceMatchFilter;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const targetAudienceProperties: s.Shape<TargetAudience> = {
  name: s.optional(s.string()),
  filters: audienceOperatorWithAudienceMatchFilterInternalSchema,
};

export const targetAudienceInternalSchema: Schema<TargetAudience> = s.object<TargetAudience>(
  targetAudienceProperties,
  { additionalProperties: s.json() },
);

export const targetAudienceSchema: Schema<TargetAudience> = s.lazySchema(() =>
  s.object<TargetAudience>(
    {
      ...targetAudienceProperties,
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(100))),
      filters: audienceOperatorWithAudienceMatchFilterSchema,
    },
    { additionalProperties: s.json() },
  ),
);
