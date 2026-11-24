import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dialingTypeSchema, type DialingType } from "./dialing-type.js";
import { transport2Schema, type Transport2 } from "./transport2.js";

/** Created destination details */
export type DidDestination = {
  /** Destination ID */
  id: number;
  /** Transport type */
  transport: Transport2;
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

export const didDestinationSchema: Schema<DidDestination> = s.object<DidDestination>(
  {
    id: s.int(),
    transport: transport2Schema,
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
