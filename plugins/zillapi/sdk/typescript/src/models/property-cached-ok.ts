import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { propertySchema, type Property } from "./property.js";

export type PropertyCachedOk = {
  /**
   * Full property-detail record (300+ fields; additional properties allowed). This is the DETAIL
   * shape and differs from the SearchResultRow shape returned by search endpoints.
   */
  data?: Property;
  requestId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const propertyCachedOkSchema: Schema<PropertyCachedOk> = s.object<PropertyCachedOk>(
  {
    data: s.optional(s.lazy(() => propertySchema)),
    requestId: s.optional(s.string()),
    _keysMap: {
      requestId: "request_id",
    },
  },
  { additionalProperties: s.json() },
);
