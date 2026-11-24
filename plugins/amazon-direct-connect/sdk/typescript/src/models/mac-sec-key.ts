import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MacSecKey = {
  /** The Amazon Resource Name (ARN) of the MAC Security (MACsec) secret key. */
  secretArn?: string;
  /** The Connection Key Name (CKN) for the MAC Security secret key. */
  ckn?: string;
  /**
   * The state of the MAC Security (MACsec) secret key. The possible values are: associating: The
   * MAC Security (MACsec) secret key is being validated and not yet associated with the connection
   * or LAG. associated: The MAC Security (MACsec) secret key is validated and associated with the
   * connection or LAG. disassociating: The MAC Security (MACsec) secret key is being disassociated
   * from the connection or LAG disassociated: The MAC Security (MACsec) secret key is no longer
   * associated with the connection or LAG.
   */
  state?: string;
  /**
   * The date that the MAC Security (MACsec) secret key takes effect. The value is displayed in UTC
   * format.
   */
  startOn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const macSecKeySchema: Schema<MacSecKey> = s.object<MacSecKey>(
  {
    secretArn: s.optional(s.string()),
    ckn: s.optional(s.string()),
    state: s.optional(s.string()),
    startOn: s.optional(s.string()),
    _keysMap: {
      secretArn: "secretARN",
    },
  },
  { additionalProperties: s.json() },
);
