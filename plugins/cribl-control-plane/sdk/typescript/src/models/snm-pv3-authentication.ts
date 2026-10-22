import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { snmpV3UserSchema, type SnmpV3User } from "./snmp-v3-user.js";

/**
 * Authentication parameters for SNMPv3 trap. Set the log level to debug if you are experiencing
 * authentication or decryption issues.
 */
export type SnmPv3Authentication = {
  /** Enabled */
  v3AuthEnabled: boolean;
  /**
   * Pass through traps that don't match any of the configured users. \@{product} will not attempt
   * to decrypt these traps.
   */
  allowUnmatchedTrap?: boolean;
  /** User credentials for receiving v3 traps */
  v3Users?: SnmpV3User[];
};

export const snmPv3AuthenticationSchema: Schema<SnmPv3Authentication> = s.object<SnmPv3Authentication>({
  v3AuthEnabled: s.boolean(),
  allowUnmatchedTrap: s.optional(s.boolean()),
  v3Users: s.optional(s.array(s.lazy(() => snmpV3UserSchema))),
});
