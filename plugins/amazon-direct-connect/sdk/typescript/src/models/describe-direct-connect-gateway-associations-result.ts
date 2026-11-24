import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  directConnectGatewayAssociationSchema,
  type DirectConnectGatewayAssociation,
} from "./direct-connect-gateway-association.js";

export type DescribeDirectConnectGatewayAssociationsResult = {
  /** Information about the associations. */
  directConnectGatewayAssociations?: DirectConnectGatewayAssociation[];
  /** The token to retrieve the next page. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeDirectConnectGatewayAssociationsResultSchema: Schema<DescribeDirectConnectGatewayAssociationsResult> =
  s.object<DescribeDirectConnectGatewayAssociationsResult>(
    {
      directConnectGatewayAssociations: s.optional(
        s.array(s.lazy(() => directConnectGatewayAssociationSchema)),
      ),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
