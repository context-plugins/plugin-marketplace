import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ConfirmPrivateVirtualInterfaceRequest = {
  /** The ID of the virtual interface. */
  virtualInterfaceId: string;
  /** The ID of the virtual private gateway. */
  virtualGatewayId?: string;
  /** The ID of the Direct Connect gateway. */
  directConnectGatewayId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const confirmPrivateVirtualInterfaceRequestSchema: Schema<ConfirmPrivateVirtualInterfaceRequest> =
  s.object<ConfirmPrivateVirtualInterfaceRequest>(
    {
      virtualInterfaceId: s.string(),
      virtualGatewayId: s.optional(s.string()),
      directConnectGatewayId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
