import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Analytics metadata */
export type AnalyticsMeta = {
  /** UUID for product analytics event */
  productEventUuid?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsMetaSchema: Schema<AnalyticsMeta> = s.object<AnalyticsMeta>(
  {
    productEventUuid: s.optional(s.string()),
    _keysMap: {
      productEventUuid: "product_event_uuid",
    },
  },
  { additionalProperties: s.json() },
);
