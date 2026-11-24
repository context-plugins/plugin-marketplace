import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dgaFeaturesSchema, type DgaFeatures } from "./dga-features.js";

export type DgaScore = {
  score?: number;
  isDga?: boolean;
  model?: string;
  features?: DgaFeatures;
  interpretation?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dgaScoreSchema: Schema<DgaScore> = s.object<DgaScore>(
  {
    score: s.optional(s.float64()),
    isDga: s.optional(s.boolean()),
    model: s.optional(s.string()),
    features: s.optional(s.lazy(() => dgaFeaturesSchema)),
    interpretation: s.optional(s.string()),
    _keysMap: {
      isDga: "is_dga",
    },
  },
  { additionalProperties: s.json() },
);
