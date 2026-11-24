import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { state2Schema, type State2 } from "./state2.js";
import { substateSchema, type Substate } from "./substate.js";

/** The status of a cluster and its instances. */
export type ClusterStatus = {
  /** Optional. Details of cluster's state. */
  detail?: string;
  /** Output only. Additional state information that includes status reported by the agent. */
  substate?: Substate;
  /** Output only. The cluster's state. */
  state?: State2;
  /**
   * Output only. Time when this state was entered (see JSON representation of Timestamp
   * (https://developers.google.com/protocol-buffers/docs/proto3#json)).
   */
  stateStartTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const clusterStatusSchema: Schema<ClusterStatus> = s.object<ClusterStatus>(
  {
    detail: s.optional(s.string()),
    substate: s.optional(s.lazy(() => substateSchema)),
    state: s.optional(s.lazy(() => state2Schema)),
    stateStartTime: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
