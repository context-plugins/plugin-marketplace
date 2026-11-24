import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tagSchema, type Tag } from "./tag.js";

export type CreateInterconnectRequest = {
  /** The name of the interconnect. */
  interconnectName: string;
  /** The port bandwidth, in Gbps. The possible values are 1, 10, and 100. */
  bandwidth: string;
  /** The location of the interconnect. */
  location: string;
  /** The ID of the LAG. */
  lagId?: string;
  /** The tags to associate with the interconnect. */
  tags?: Tag[];
  /** The name of the service provider associated with the interconnect. */
  providerName?: string;
  /** Indicates whether you want the interconnect to support MAC Security (MACsec). */
  requestMacSec?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createInterconnectRequestSchema: Schema<CreateInterconnectRequest> =
  s.object<CreateInterconnectRequest>(
    {
      interconnectName: s.string(),
      bandwidth: s.string(),
      location: s.string(),
      lagId: s.optional(s.string()),
      tags: s.optional(s.array(s.lazy(() => tagSchema))),
      providerName: s.optional(s.string()),
      requestMacSec: s.optional(s.boolean()),
      _keysMap: {
        requestMacSec: "requestMACSec",
      },
    },
    { additionalProperties: s.json() },
  );
