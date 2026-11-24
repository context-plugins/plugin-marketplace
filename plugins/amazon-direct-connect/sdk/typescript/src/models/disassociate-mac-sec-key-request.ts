import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DisassociateMacSecKeyRequest = {
  /**
   * The ID of the dedicated connection (dxcon-xxxx), interconnect (dxcon-xxxx), or LAG
   * (dxlag-xxxx). You can use DescribeConnections, DescribeInterconnects, or DescribeLags to
   * retrieve connection ID.
   */
  connectionId: string;
  /**
   * The Amazon Resource Name (ARN) of the MAC Security (MACsec) secret key. You can use
   * DescribeConnections to retrieve the ARN of the MAC Security (MACsec) secret key.
   */
  secretArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const disassociateMacSecKeyRequestSchema: Schema<DisassociateMacSecKeyRequest> =
  s.object<DisassociateMacSecKeyRequest>(
    {
      connectionId: s.string(),
      secretArn: s.string(),
      _keysMap: {
        secretArn: "secretARN",
      },
    },
    { additionalProperties: s.json() },
  );
