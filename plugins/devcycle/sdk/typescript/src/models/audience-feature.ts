import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AudienceFeature = {
  key: string;
  name: string;
  id: string;
  environments: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const audienceFeatureProperties: s.Shape<AudienceFeature> = {
  key: s.string(),
  name: s.string(),
  id: s.string(),
  environments: s.record(s.string(), s.unknown()),
};

export const audienceFeatureInternalSchema: Schema<AudienceFeature> = s.object<AudienceFeature>(
  audienceFeatureProperties,
  { additionalProperties: s.json() },
);

export const audienceFeatureSchema: Schema<AudienceFeature> = s.lazySchema(() =>
  s.object<AudienceFeature>(
    {
      ...audienceFeatureProperties,
      key: s.string().check(s.minLength(1), s.maxLength(100), s.pattern("^[a-z0-9-_.]+$")),
      name: s.string().check(s.minLength(1), s.maxLength(100)),
    },
    { additionalProperties: s.json() },
  ),
);
