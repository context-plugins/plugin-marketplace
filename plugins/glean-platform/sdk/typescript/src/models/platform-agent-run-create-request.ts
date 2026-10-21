import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ExecutionMode, executionModeSchema } from "./execution-mode.js";
import { platformMessageSchema, type PlatformMessage } from "./platform-message.js";

/**
 * Request to run an agent. A request MUST supply either `messages` (a non-empty conversation) or
 * `input` (for input-form triggered agents).
 */
export type PlatformAgentRunCreateRequest = {
  /** Input fields for an input-form triggered agent. */
  input?: Record<string, unknown>;
  /**
   * Messages to pass to the agent. When provided, the array MUST contain at least one message and
   * each message MUST specify a valid `role` and non-empty `content`.
   */
  messages?: PlatformMessage[];
  /** Metadata to pass to the agent. */
  metadata?: Record<string, unknown>;
  /**
   * Whether to stream the run response as server-sent events. Not supported in DURABLE mode.
   *
   * @default false
   */
  stream?: boolean;
  /**
   * REQUEST_BOUND preserves the existing wait/stream behavior. DURABLE starts a fresh, persisted
   * execution with a 30-minute execution timeout and returns immediately. DURABLE requires stream
   * to be false or omitted and does not accept metadata.chat_session_id. It does not bypass tool
   * approval requirements or provide automatic QE-crash resumption. Expiry is read-triggered: the
   * next GET of the run marks an active turn FAILED if more than 40 minutes have passed since the
   * turn was accepted. There is no periodic sweep, so the stored run can remain RUNNING until it is
   * read. Expiry never replays execution or expires approval-paused runs, and failure does not
   * prove that external tool work has stopped.
   *
   * @default ExecutionMode.RequestBound
   */
  executionMode?: ExecutionMode;
};

export const platformAgentRunCreateRequestSchema: Schema<PlatformAgentRunCreateRequest> =
  s.object<PlatformAgentRunCreateRequest>({
    input: s.optional(s.record(s.string(), s.unknown())),
    messages: s.optional(s.array(s.lazy(() => platformMessageSchema))),
    metadata: s.optional(s.record(s.string(), s.unknown())),
    stream: s.defaulted(s.boolean(), false),
    executionMode: s.defaulted(executionModeSchema, ExecutionMode.RequestBound),
    _keysMap: {
      executionMode: "execution_mode",
    },
  });
