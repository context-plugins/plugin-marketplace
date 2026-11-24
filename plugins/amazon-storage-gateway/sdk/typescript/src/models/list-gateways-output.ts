import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { gatewayInfoSchema, type GatewayInfo } from "./gateway-info.js";

export type ListGatewaysOutput = {
  /** An array of GatewayInfo objects. */
  gateways?: GatewayInfo[];
  /**
   * Use the marker in your next request to fetch the next set of gateways in the list. If there are
   * no more gateways to list, this field does not appear in the response.
   */
  marker?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listGatewaysOutputSchema: Schema<ListGatewaysOutput> = s.object<ListGatewaysOutput>(
  {
    gateways: s.optional(s.array(s.lazy(() => gatewayInfoSchema))),
    marker: s.optional(s.string()),
    _keysMap: {
      gateways: "Gateways",
      marker: "Marker",
    },
  },
  { additionalProperties: s.json() },
);
