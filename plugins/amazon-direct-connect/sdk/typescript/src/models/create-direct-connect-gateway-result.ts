import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { directConnectGatewaySchema, type DirectConnectGateway } from "./direct-connect-gateway.js";

export type CreateDirectConnectGatewayResult = {
  directConnectGateway?: DirectConnectGateway;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createDirectConnectGatewayResultSchema: Schema<CreateDirectConnectGatewayResult> =
  s.object<CreateDirectConnectGatewayResult>(
    {
      directConnectGateway: s.optional(s.lazy(() => directConnectGatewaySchema)),
    },
    { additionalProperties: s.json() },
  );
