import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ConfirmTransitVirtualInterfaceRequest = {
  /** The ID of the virtual interface. */
  virtualInterfaceId: string;
  /** The ID of the Direct Connect gateway. */
  directConnectGatewayId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const confirmTransitVirtualInterfaceRequestSchema: Schema<ConfirmTransitVirtualInterfaceRequest> =
  s.object<ConfirmTransitVirtualInterfaceRequest>(
    {
      virtualInterfaceId: s.string(),
      directConnectGatewayId: s.string(),
    },
    { additionalProperties: s.json() },
  );
