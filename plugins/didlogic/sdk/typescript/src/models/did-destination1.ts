import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dialingTypeSchema, type DialingType } from "./dialing-type.js";
import { transportSchema, type Transport } from "./transport.js";

/** Updated destination details */
export type DidDestination1 = {
  /** Destination ID */
  id: number;
  /**
   * Transport type: 1 = SIP URI, 4 = Phone number, 5 = SIP device, 10 = Webphone, 12 = WebSocket,
   * 13 = SDK (rings the account of one of your SDK tokens; set up through the SDK, not through this
   * API)
   */
  transport: Transport;
  /** Forwarding target */
  destination: string;
  /** Destination priority */
  priority: number;
  /** Whether callhunt is enabled */
  callhunt: boolean;
  /**
   * Dialing mode of the group this destination belongs to: `sequence` tries it alone, `ring_all`
   * dials the whole group at once, `random` picks group members in a random order. Mirrors
   * `callhunt` (`ring_all` maps to true).
   */
  dialingType: DialingType;
  /** Whether destination is active */
  active: boolean;
  /** Linked AI agent ID (null when the destination is not an AI agent) */
  aiAgentId: number | null;
  /** Linked AI agent name (null when the destination is not an AI agent) */
  aiAgentName: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const didDestination1Schema: Schema<DidDestination1> = s.object<DidDestination1>(
  {
    id: s.int(),
    transport: transportSchema,
    destination: s.string(),
    priority: s.int(),
    callhunt: s.boolean(),
    dialingType: dialingTypeSchema,
    active: s.boolean(),
    aiAgentId: s.nullable(s.int()),
    aiAgentName: s.nullable(s.string()),
    _keysMap: {
      dialingType: "dialing_type",
      aiAgentId: "ai_agent_id",
      aiAgentName: "ai_agent_name",
    },
  },
  { additionalProperties: s.json() },
);
