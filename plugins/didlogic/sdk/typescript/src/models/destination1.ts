import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dialingType1Schema, type DialingType1 } from "./dialing-type1.js";
import { transport1Schema, type Transport1 } from "./transport1.js";

export type Destination1 = {
  /**
   * Forwarding target (SIP URI or phone number). Required for every transport except Webphone (10),
   * which rings your webphone and takes no address.
   */
  destination?: string;
  /** Enable callhunt (ring all). Ignored when `destination[dialing_type]` is sent. */
  callhunt?: boolean;
  /**
   * Dialing mode of the group this destination belongs to: `sequence` tries it alone, `ring_all`
   * dials the whole group at once, `random` picks group members in a random order. Mirrors
   * `callhunt` (`ring_all` maps to true). Takes precedence over `callhunt`.
   */
  dialingType?: DialingType1;
  /** Activate this destination */
  active?: boolean;
  /**
   * Transport type (1=SIP URI, 4=Phone number, 5=SIP device, 10=Webphone, 12=WebSocket). 12
   * requires an account enabled for voice streaming.
   */
  transport: Transport1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const destination1Schema: Schema<Destination1> = s.object<Destination1>(
  {
    destination: s.optional(s.string()),
    callhunt: s.optional(s.boolean()),
    dialingType: s.optional(s.lazy(() => dialingType1Schema)),
    active: s.optional(s.boolean()),
    transport: transport1Schema,
    _keysMap: {
      dialingType: "dialing_type",
    },
  },
  { additionalProperties: s.json() },
);
