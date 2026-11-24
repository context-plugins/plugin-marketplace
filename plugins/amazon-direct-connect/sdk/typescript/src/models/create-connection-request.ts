import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { billingMode2Schema, type BillingMode2 } from "./billing-mode2.js";
import { tagSchema, type Tag } from "./tag.js";

export type CreateConnectionRequest = {
  /** The location of the connection. */
  location: string;
  /** The bandwidth of the connection. */
  bandwidth: string;
  /** The name of the connection. */
  connectionName: string;
  /** The ID of the LAG. */
  lagId?: string;
  /** The tags to associate with the lag. */
  tags?: Tag[];
  /** The name of the service provider associated with the requested connection. */
  providerName?: string;
  /**
   * Indicates whether you want the connection to support MAC Security (MACsec). MAC Security
   * (MACsec) is unavailable on hosted connections. For information about MAC Security (MACsec)
   * prerequisites, see MAC Security in Direct Connect in the Direct Connect User Guide.
   */
  requestMacSec?: boolean;
  /** The billing mode for the connection. */
  billingMode?: BillingMode2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createConnectionRequestSchema: Schema<CreateConnectionRequest> =
  s.object<CreateConnectionRequest>(
    {
      location: s.string(),
      bandwidth: s.string(),
      connectionName: s.string(),
      lagId: s.optional(s.string()),
      tags: s.optional(s.array(s.lazy(() => tagSchema))),
      providerName: s.optional(s.string()),
      requestMacSec: s.optional(s.boolean()),
      billingMode: s.optional(s.lazy(() => billingMode2Schema)),
      _keysMap: {
        requestMacSec: "requestMACSec",
      },
    },
    { additionalProperties: s.json() },
  );
