import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteDirectConnectGatewayRequest = {
  /** The ID of the Direct Connect gateway. */
  directConnectGatewayId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteDirectConnectGatewayRequestSchema: Schema<DeleteDirectConnectGatewayRequest> =
  s.object<DeleteDirectConnectGatewayRequest>(
    {
      directConnectGatewayId: s.string(),
    },
    { additionalProperties: s.json() },
  );
