import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { environmentConfig2Schema, type EnvironmentConfig2 } from "./environment-config2.js";
import { jupyterConfig2Schema, type JupyterConfig2 } from "./jupyter-config2.js";
import { runtimeConfig2Schema, type RuntimeConfig2 } from "./runtime-config2.js";
import { runtimeInfo1Schema, type RuntimeInfo1 } from "./runtime-info1.js";
import { sessionStateHistorySchema, type SessionStateHistory } from "./session-state-history.js";
import { state5Schema, type State5 } from "./state5.js";

/** A representation of a session. */
export type Session = {
  /**
   * Optional. The labels to associate with the session. Label keys must contain 1 to 63 characters,
   * and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty,
   * but, if present, must contain 1 to 63 characters, and must conform to RFC 1035
   * (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a
   * session.
   */
  labels?: Record<string, string>;
  /** Optional. Spark connect session config. */
  sparkConnectSession?: Record<string, unknown>;
  /** Output only. The time when the session was created. */
  createTime?: string;
  /** Output only. Runtime information about session execution. */
  runtimeInfo?: RuntimeInfo1;
  /**
   * Output only. A session UUID (Unique Universal Identifier). The service generates this value
   * when it creates the session.
   */
  uuid?: string;
  /** Output only. A state of the session. */
  state?: State5;
  /** Identifier. The resource name of the session. */
  name?: string;
  /** Optional. Runtime configuration for the session execution. */
  runtimeConfig?: RuntimeConfig2;
  /** Optional. The email address of the user who owns the session. */
  user?: string;
  /** Output only. Session state details, such as the failure description if the state is FAILED. */
  stateMessage?: string;
  /**
   * Optional. The session template used by the session.Resource names and short template IDs are
   * valid. Examples: *
   * projects/[project_id]/locations/[dataproc_region]/sessionTemplates/[template_id] *
   * [template_id]The template must be in the same project and Dataproc region as the session.
   */
  sessionTemplate?: string;
  /** Output only. The email address of the user who created the session. */
  creator?: string;
  /** Optional. Jupyter session config. */
  jupyterSession?: JupyterConfig2;
  /** Optional. Environment configuration for the session execution. */
  environmentConfig?: EnvironmentConfig2;
  /** Output only. Historical state information for the session. */
  stateHistory?: SessionStateHistory[];
  /** Output only. The time when the session entered the current state. */
  stateTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sessionSchema: Schema<Session> = s.object<Session>(
  {
    labels: s.optional(s.record(s.string(), s.string())),
    sparkConnectSession: s.optional(s.record(s.string(), s.unknown())),
    createTime: s.optional(s.string()),
    runtimeInfo: s.optional(s.lazy(() => runtimeInfo1Schema)),
    uuid: s.optional(s.string()),
    state: s.optional(s.lazy(() => state5Schema)),
    name: s.optional(s.string()),
    runtimeConfig: s.optional(s.lazy(() => runtimeConfig2Schema)),
    user: s.optional(s.string()),
    stateMessage: s.optional(s.string()),
    sessionTemplate: s.optional(s.string()),
    creator: s.optional(s.string()),
    jupyterSession: s.optional(s.lazy(() => jupyterConfig2Schema)),
    environmentConfig: s.optional(s.lazy(() => environmentConfig2Schema)),
    stateHistory: s.optional(s.array(s.lazy(() => sessionStateHistorySchema))),
    stateTime: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
