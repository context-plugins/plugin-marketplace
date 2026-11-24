import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  v1BetaAudienceDimensionValueSchema,
  type V1BetaAudienceDimensionValue,
} from "./v1-beta-audience-dimension-value.js";

/** Dimension value attributes for the audience user row. */
export type V1BetaAudienceRow = {
  /**
   * Each dimension value attribute for an audience user. One dimension value will be added for each
   * dimension column requested.
   */
  dimensionValues?: V1BetaAudienceDimensionValue[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1BetaAudienceRowSchema: Schema<V1BetaAudienceRow> = s.object<V1BetaAudienceRow>(
  {
    dimensionValues: s.optional(s.array(s.lazy(() => v1BetaAudienceDimensionValueSchema))),
  },
  { additionalProperties: s.json() },
);
