import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tagSchema, type Tag } from "./tag.js";

export type CreateDirectConnectGatewayRequest = {
  /** The name of the Direct Connect gateway. */
  directConnectGatewayName: string;
  /** The key-value pair tags associated with the request. */
  tags?: Tag[];
  /**
   * The autonomous system number (ASN) for Border Gateway Protocol (BGP) to be configured on the
   * Amazon side of the connection. The ASN must be in the private range of 64,512 to 65,534 or
   * 4,200,000,000 to 4,294,967,294. The default is 64512.
   */
  amazonSideAsn?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createDirectConnectGatewayRequestSchema: Schema<CreateDirectConnectGatewayRequest> =
  s.object<CreateDirectConnectGatewayRequest>(
    {
      directConnectGatewayName: s.string(),
      tags: s.optional(s.array(s.lazy(() => tagSchema))),
      amazonSideAsn: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
