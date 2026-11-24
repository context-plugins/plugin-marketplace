import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UpdateConnectionRequest = {
  /** The ID of the connection. You can use DescribeConnections to retrieve the connection ID. */
  connectionId: string;
  /** The name of the connection. */
  connectionName?: string;
  /**
   * The connection MAC Security (MACsec) encryption mode. The valid values are no_encrypt,
   * should_encrypt, and must_encrypt.
   */
  encryptionMode?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateConnectionRequestSchema: Schema<UpdateConnectionRequest> =
  s.object<UpdateConnectionRequest>(
    {
      connectionId: s.string(),
      connectionName: s.optional(s.string()),
      encryptionMode: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
