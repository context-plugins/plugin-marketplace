import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListGatewaysInput = {
  /**
   * An opaque string that indicates the position at which to begin the returned list of gateways.
   */
  marker?: string;
  /** Specifies that the list of gateways returned be limited to the specified number of items. */
  limit?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listGatewaysInputSchema: Schema<ListGatewaysInput> = s.object<ListGatewaysInput>(
  {
    marker: s.optional(s.string()),
    limit: s.optional(s.int()),
    _keysMap: {
      marker: "Marker",
      limit: "Limit",
    },
  },
  { additionalProperties: s.json() },
);
