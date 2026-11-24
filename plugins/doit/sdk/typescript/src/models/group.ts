import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dimensionsTypesSchema, type DimensionsTypes } from "./dimensions-types.js";
import { limitSchema, type Limit } from "./limit.js";

/** The dimension that defines a row in the report. */
export type Group = {
  /** Dimension ID. */
  id?: string;
  /**
   * To limit the number of results based on ranking. See [Limit by
   * rank](https://help.doit.com/docs/cloud-analytics/reports/editing-your-cloud-report#limit-by-topbottom).
   */
  limit?: Limit;
  /**
   * Dimension filter type. Always pair `type` with `id` on scope filters. Discover valid `id` +
   * `type` pairs for your account with `GET /analytics/v1/dimensions`. `allocation_rule` replaces
   * `attribution`; `allocation` replaces `attribution_group`.
   */
  type?: DimensionsTypes;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const groupSchema: Schema<Group> = s.object<Group>(
  {
    id: s.optional(s.string()),
    limit: s.optional(s.lazy(() => limitSchema)),
    type: s.optional(s.lazy(() => dimensionsTypesSchema)),
  },
  { additionalProperties: s.json() },
);
