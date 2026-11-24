import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type VirtualGateway = {
  /** The ID of the virtual private gateway. */
  virtualGatewayId?: string;
  /**
   * The state of the virtual private gateway. The following are the possible values: pending:
   * Initial state after creating the virtual private gateway. available: Ready for use by a private
   * virtual interface. deleting: Initial state after deleting the virtual private gateway. deleted:
   * The virtual private gateway is deleted. The private virtual interface is unable to send traffic
   * over this gateway.
   */
  virtualGatewayState?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const virtualGatewaySchema: Schema<VirtualGateway> = s.object<VirtualGateway>(
  {
    virtualGatewayId: s.optional(s.string()),
    virtualGatewayState: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
