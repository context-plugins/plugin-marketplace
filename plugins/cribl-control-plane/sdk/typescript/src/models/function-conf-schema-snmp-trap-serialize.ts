import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { v3UserSchema, type V3User } from "./v3-user.js";

export type FunctionConfSchemaSnmpTrapSerialize = {
  /**
   * Prevent event serialization if any required fields are missing. When disabled, \@{product} will
   * attempt to serialize the event even if required fields are missing, which could cause
   * unexpected behavior at the downstream receiver.
   */
  strict?: boolean;
  /**
   * When disabled, `snmpSerializeErrors` will be set on the event, and the `__snmpRaw` field will
   * be removed to prevent \@{product} from sending the event from the SNMP Trap Destination
   */
  dropFailedEvents?: boolean;
  /** SNMPv3 user configuration, including authentication and privacy protocol settings. */
  v3User?: V3User;
};

export const functionConfSchemaSnmpTrapSerializeSchema: Schema<FunctionConfSchemaSnmpTrapSerialize> =
  s.object<FunctionConfSchemaSnmpTrapSerialize>({
    strict: s.optional(s.boolean()),
    dropFailedEvents: s.optional(s.boolean()),
    v3User: s.optional(s.lazy(() => v3UserSchema)),
  });
