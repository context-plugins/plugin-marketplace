import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { directConnectGatewaySchema, type DirectConnectGateway } from "./direct-connect-gateway.js";

export type DescribeDirectConnectGatewaysResult = {
  /** The Direct Connect gateways. */
  directConnectGateways?: DirectConnectGateway[];
  /** The token to retrieve the next page. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeDirectConnectGatewaysResultSchema: Schema<DescribeDirectConnectGatewaysResult> =
  s.object<DescribeDirectConnectGatewaysResult>(
    {
      directConnectGateways: s.optional(s.array(s.lazy(() => directConnectGatewaySchema))),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
