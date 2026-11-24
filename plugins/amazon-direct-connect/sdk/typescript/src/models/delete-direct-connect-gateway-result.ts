import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { directConnectGatewaySchema, type DirectConnectGateway } from "./direct-connect-gateway.js";

export type DeleteDirectConnectGatewayResult = {
  directConnectGateway?: DirectConnectGateway;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteDirectConnectGatewayResultSchema: Schema<DeleteDirectConnectGatewayResult> =
  s.object<DeleteDirectConnectGatewayResult>(
    {
      directConnectGateway: s.optional(s.lazy(() => directConnectGatewaySchema)),
    },
    { additionalProperties: s.json() },
  );
