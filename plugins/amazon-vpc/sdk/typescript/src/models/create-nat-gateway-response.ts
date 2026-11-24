import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { natGatewaySchema, type NatGateway } from "./nat-gateway.js";

/** Response from the CreateNatGateway action */
export type CreateNatGatewayResponse = {
  /** Describes a NAT gateway */
  natGateway?: NatGateway;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createNatGatewayResponseSchema: Schema<CreateNatGatewayResponse> =
  s.object<CreateNatGatewayResponse>(
    {
      natGateway: s.optional(s.lazy(() => natGatewaySchema)),
    },
    { additionalProperties: s.json() },
  );
