import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UpdateDirectConnectGatewayRequest = {
  /** The ID of the Direct Connect gateway to update. */
  directConnectGatewayId: string;
  /** The new name for the Direct Connect gateway. */
  newDirectConnectGatewayName: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateDirectConnectGatewayRequestSchema: Schema<UpdateDirectConnectGatewayRequest> =
  s.object<UpdateDirectConnectGatewayRequest>(
    {
      directConnectGatewayId: s.string(),
      newDirectConnectGatewayName: s.string(),
    },
    { additionalProperties: s.json() },
  );
