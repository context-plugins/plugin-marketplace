import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dimensionsTypesSchema, type DimensionsTypes } from "./dimensions-types.js";

/** Summary information about a dimension. */
export type DimensionExternalApiListItem = {
  /** The identifier of the dimension. */
  id?: string;
  /** The label of the dimension. */
  label?: string;
  /**
   * Dimension filter type. Always pair `type` with `id` on scope filters. Discover valid `id` +
   * `type` pairs for your account with `GET /analytics/v1/dimensions`. `allocation_rule` replaces
   * `attribution`; `allocation` replaces `attribution_group`.
   */
  type?: DimensionsTypes;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dimensionExternalApiListItemSchema: Schema<DimensionExternalApiListItem> =
  s.object<DimensionExternalApiListItem>(
    {
      id: s.optional(s.string()),
      label: s.optional(s.string()),
      type: s.optional(s.lazy(() => dimensionsTypesSchema)),
    },
    { additionalProperties: s.json() },
  );
