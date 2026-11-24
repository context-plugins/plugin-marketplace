import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { type4DoiTReportsApiSchema, type Type4DoiTReportsApi } from "./type4-doi-treports-api.js";

/** Target and value of a split definition. */
export type ExternalSplitTarget = {
  /** ID of the target. */
  id?: string;
  /**
   * Type of the target. If split type is "attribution_group", then target type must be
   * "attribution". Otherwise split types and target types must be the same.
   */
  type?: Type4DoiTReportsApi;
  /**
   * Percent of the target, represented in float format. E.g. 30% is 0.3. Required only if the Split
   * Mode is custom.
   */
  value?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const externalSplitTargetSchema: Schema<ExternalSplitTarget> = s.object<ExternalSplitTarget>(
  {
    id: s.optional(s.string()),
    type: s.optional(s.lazy(() => type4DoiTReportsApiSchema)),
    value: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
