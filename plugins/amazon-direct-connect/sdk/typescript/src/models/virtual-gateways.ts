import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { virtualGatewaySchema, type VirtualGateway } from "./virtual-gateway.js";

export type VirtualGateways = {
  /** The virtual private gateways. */
  virtualGateways?: VirtualGateway[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const virtualGatewaysSchema: Schema<VirtualGateways> = s.object<VirtualGateways>(
  {
    virtualGateways: s.optional(s.array(s.lazy(() => virtualGatewaySchema))),
  },
  { additionalProperties: s.json() },
);
