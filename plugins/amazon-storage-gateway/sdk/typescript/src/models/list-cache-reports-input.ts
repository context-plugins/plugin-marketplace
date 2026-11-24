import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListCacheReportsInput = {
  /**
   * Opaque pagination token returned from a previous ListCacheReports operation. If present, Marker
   * specifies where to continue the list from after a previous call to ListCacheReports. Optional.
   */
  marker?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listCacheReportsInputSchema: Schema<ListCacheReportsInput> = s.object<ListCacheReportsInput>(
  {
    marker: s.optional(s.string()),
    _keysMap: {
      marker: "Marker",
    },
  },
  { additionalProperties: s.json() },
);
