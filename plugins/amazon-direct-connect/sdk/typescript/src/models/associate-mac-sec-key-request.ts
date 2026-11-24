import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AssociateMacSecKeyRequest = {
  /**
   * The ID of the dedicated connection (dxcon-xxxx), interconnect (dxcon-xxxx), or LAG
   * (dxlag-xxxx). You can use DescribeConnections, DescribeInterconnects, or DescribeLags to
   * retrieve connection ID.
   */
  connectionId: string;
  /**
   * The Amazon Resource Name (ARN) of the MAC Security (MACsec) secret key to associate with the
   * connection. You can use DescribeConnections or DescribeLags to retrieve the MAC Security
   * (MACsec) secret key. If you use this request parameter, you do not use the ckn and cak request
   * parameters.
   */
  secretArn?: string;
  /**
   * The MAC Security (MACsec) CKN to associate with the connection. You can create the CKN/CAK pair
   * using an industry standard tool. The valid values are 64 hexadecimal characters (0-9, A-E). If
   * you use this request parameter, you must use the cak request parameter and not use the
   * secretARN request parameter.
   */
  ckn?: string;
  /**
   * The MAC Security (MACsec) CAK to associate with the connection. You can create the CKN/CAK pair
   * using an industry standard tool. The valid values are 64 hexadecimal characters (0-9, A-E). If
   * you use this request parameter, you must use the ckn request parameter and not use the
   * secretARN request parameter.
   */
  cak?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const associateMacSecKeyRequestSchema: Schema<AssociateMacSecKeyRequest> =
  s.object<AssociateMacSecKeyRequest>(
    {
      connectionId: s.string(),
      secretArn: s.optional(s.string()),
      ckn: s.optional(s.string()),
      cak: s.optional(s.string()),
      _keysMap: {
        secretArn: "secretARN",
      },
    },
    { additionalProperties: s.json() },
  );
