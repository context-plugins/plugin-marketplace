import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reasonSchema, type Reason } from "./reason.js";
import { state1Schema, type State1 } from "./state1.js";

/** The Click2Call call resource */
export type Data1 = {
  /** Call ID (26-character ULID) */
  id: string;
  /** How far the call got. `agent_ringing` may be skipped — see the description above. */
  state: State1;
  /** Why the call ended. `null` while the call is live and on a normal end. */
  reason: Reason | null;
  /** Type of the agent leg. Always `sip_account` in v1. */
  aType: string;
  /** The SIP account that was rung first */
  aEndpoint: string;
  /** Destination number, digits only */
  bNumber: string;
  /** Always `null` in v1 */
  bCli: string | null;
  /** When the call was placed. The 12-hour retention window runs from here. */
  createdAt: string;
  /**
   * When the agent leg started ringing. Best-effort: `null` when the phone never reported the ring,
   * not only when it never rang.
   */
  agentRingingAt: string | null;
  /** When the agent leg answered */
  agentAnsweredAt: string | null;
  /** When the destination was dialled */
  customerRingingAt: string | null;
  /** When the two legs were bridged */
  bridgedAt: string | null;
  /** When the call ended */
  endedAt: string | null;
  /** Whole life of the call in seconds, ringing included. Not the billed time. */
  duration: number | null;
  /** Total cost in dollars, four decimals */
  cost: string | null;
  /**
   * When the billed record was committed. `null` until then, and until it is set `cost` may still
   * be `null`.
   */
  finalizedAt: string | null;
  /**
   * Where the recording of the call can be downloaded. `null` when the call was not recorded, and
   * `null` on a call that has not settled yet. By default the link is signed and expires one hour
   * after it was minted; each read of the call mints a fresh one, and `GET
   * /api/v1/calls/recording/{callid}` also gives one. If the account has permanent recording links
   * enabled (on request through your account manager or support), the field holds a permanent
   * `/api/v1/recordings/{user_id}/{token}` URL instead. It does not expire while the recording is
   * retained and the option stays on.
   */
  recordingUrl: string | null;
  /**
   * The label you supplied when placing the call, echoed back unchanged. `null` when none was
   * supplied. Carried on every webhook for this call.
   */
  clientCallId: string | null;
  /**
   * The caller ID the agent leg was presented with, digits only: the `a_cli` you supplied, or
   * `b_number` when you supplied none. Carried on every webhook for this call.
   */
  aCli: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const data1Schema: Schema<Data1> = s.object<Data1>(
  {
    id: s.string(),
    state: state1Schema,
    reason: s.nullable(s.lazy(() => reasonSchema)),
    aType: s.string(),
    aEndpoint: s.string(),
    bNumber: s.string(),
    bCli: s.nullable(s.string()),
    createdAt: s.string(),
    agentRingingAt: s.nullable(s.string()),
    agentAnsweredAt: s.nullable(s.string()),
    customerRingingAt: s.nullable(s.string()),
    bridgedAt: s.nullable(s.string()),
    endedAt: s.nullable(s.string()),
    duration: s.nullable(s.int()),
    cost: s.nullable(s.string()),
    finalizedAt: s.nullable(s.string()),
    recordingUrl: s.nullable(s.string()),
    clientCallId: s.nullable(s.string()),
    aCli: s.nullable(s.string()),
    _keysMap: {
      aType: "a_type",
      aEndpoint: "a_endpoint",
      bNumber: "b_number",
      bCli: "b_cli",
      createdAt: "created_at",
      agentRingingAt: "agent_ringing_at",
      agentAnsweredAt: "agent_answered_at",
      customerRingingAt: "customer_ringing_at",
      bridgedAt: "bridged_at",
      endedAt: "ended_at",
      finalizedAt: "finalized_at",
      recordingUrl: "recording_url",
      clientCallId: "client_call_id",
      aCli: "a_cli",
    },
  },
  { additionalProperties: s.json() },
);
