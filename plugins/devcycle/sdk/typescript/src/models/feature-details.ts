import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FeatureDetails = {
  key: string;
  name: string;
  id: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const featureDetailsProperties: s.Shape<FeatureDetails> = {
  key: s.string(),
  name: s.string(),
  id: s.string(),
};

export const featureDetailsInternalSchema: Schema<FeatureDetails> = s.object<FeatureDetails>(
  featureDetailsProperties,
  { additionalProperties: s.json() },
);

export const featureDetailsSchema: Schema<FeatureDetails> = s.lazySchema(() =>
  s.object<FeatureDetails>(
    {
      ...featureDetailsProperties,
      key: s.string().check(s.minLength(1), s.maxLength(100), s.pattern("^[a-z0-9-_.]+$")),
      name: s.string().check(s.minLength(1), s.maxLength(100)),
    },
    { additionalProperties: s.json() },
  ),
);
