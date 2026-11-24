import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dialingType1Schema, type DialingType1 } from "./dialing-type1.js";

export type Destination2 = {
  /** Enable callhunt (ring all). Ignored when `destination[dialing_type]` is sent. */
  callhunt?: boolean;
  /**
   * Dialing mode of the group this destination belongs to: `sequence` tries it alone, `ring_all`
   * dials the whole group at once, `random` picks group members in a random order. Mirrors
   * `callhunt` (`ring_all` maps to true). Takes precedence over `callhunt`.
   */
  dialingType?: DialingType1;
  /** Activate/deactivate this destination */
  active?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const destination2Schema: Schema<Destination2> = s.object<Destination2>(
  {
    callhunt: s.optional(s.boolean()),
    dialingType: s.optional(s.lazy(() => dialingType1Schema)),
    active: s.optional(s.boolean()),
    _keysMap: {
      dialingType: "dialing_type",
    },
  },
  { additionalProperties: s.json() },
);
