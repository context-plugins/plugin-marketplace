import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  directConnectGatewayAssociationSchema,
  type DirectConnectGatewayAssociation,
} from "./direct-connect-gateway-association.js";

export type CreateDirectConnectGatewayAssociationResult = {
  directConnectGatewayAssociation?: DirectConnectGatewayAssociation;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createDirectConnectGatewayAssociationResultSchema: Schema<CreateDirectConnectGatewayAssociationResult> =
  s.object<CreateDirectConnectGatewayAssociationResult>(
    {
      directConnectGatewayAssociation: s.optional(s.lazy(() => directConnectGatewayAssociationSchema)),
    },
    { additionalProperties: s.json() },
  );
