import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { agentId2Schema, type AgentId2 } from "./unions/agent-id2.js";
import { agentName1Schema, type AgentName1 } from "./unions/agent-name1.js";
import { agentTimezoneSchema, type AgentTimezone } from "./unions/agent-timezone.js";
import { agentType1Schema, type AgentType1 } from "./unions/agent-type1.js";
import { channelManagerServiceSchema, type ChannelManagerService } from "./unions/channel-manager-service.js";
import { channelManagerSid1Schema, type ChannelManagerSid1 } from "./unions/channel-manager-sid1.js";
import { channelManagerTypeSchema, type ChannelManagerType } from "./unions/channel-manager-type.js";
import { conversationId2Schema, type ConversationId2 } from "./unions/conversation-id2.js";
import { duration1Schema, type Duration1 } from "./unions/duration1.js";
import { experimentIdSchema, type ExperimentId } from "./unions/experiment-id.js";
import { experimentVariantIdSchema, type ExperimentVariantId } from "./unions/experiment-variant-id.js";
import {
  experimentVariantIsControlSchema,
  type ExperimentVariantIsControl,
} from "./unions/experiment-variant-is-control.js";
import { experimentVariantSchema, type ExperimentVariant } from "./unions/experiment-variant.js";
import { isLegacy1Schema, type IsLegacy1 } from "./unions/is-legacy1.js";
import { isOutboundSchema, type IsOutbound } from "./unions/is-outbound.js";
import { isTestSchema, type IsTest } from "./unions/is-test.js";
import { overrideTimestampSchema, type OverrideTimestamp } from "./unions/override-timestamp.js";
import { promptId1Schema, type PromptId1 } from "./unions/prompt-id1.js";
import { promptName1Schema, type PromptName1 } from "./unions/prompt-name1.js";
import { promptVersionNumber3Schema, type PromptVersionNumber3 } from "./unions/prompt-version-number3.js";
import { promptVersion1Schema, type PromptVersion1 } from "./unions/prompt-version1.js";
import { sessionId5Schema, type SessionId5 } from "./unions/session-id5.js";
import { sessionLabelIdSchema, type SessionLabelId } from "./unions/session-label-id.js";
import { source2Schema, type Source2 } from "./unions/source2.js";
import { target1Schema, type Target1 } from "./unions/target1.js";
import {
  transferVoicemailDetectedSchema,
  type TransferVoicemailDetected,
} from "./unions/transfer-voicemail-detected.js";
import { userTerminatedSchema, type UserTerminated } from "./unions/user-terminated.js";

/** A session is a building block of a conversation. */
export type Session = {
  /** Timestamp of the session */
  timestamp: Date;
  /** Internal ID of the session, generated based on interaction details */
  sessionId?: SessionId5;
  /** ID of the conversation of which the session is a part */
  conversationId?: ConversationId2;
  /** Name of the service used to facilitate the session */
  channelManagerService?: ChannelManagerService;
  /** Type of the service used to facilitate the session */
  channelManagerType?: ChannelManagerType;
  /** Channel-manager-side ID of the session (different from session_id) */
  channelManagerSid?: ChannelManagerSid1;
  /** ID of the agent with which the session occurred */
  agentId?: AgentId2;
  /** Name of the agent with which the session occurred */
  agentName?: AgentName1;
  /** Type of the agent with which the session occurred */
  agentType?: AgentType1;
  /** Timezone of the agent with which the session occurred */
  agentTimezone?: AgentTimezone;
  /** ID of the prompt used by the agent with which the session occurred */
  promptId?: PromptId1;
  /** Name of the prompt used by the agent with which the session occurred */
  promptName?: PromptName1;
  /** Legacy prompt version timestamp used by the agent with which the session occurred */
  promptVersion?: PromptVersion1;
  /** Prompt version number used by the agent with which the session occurred (new system) */
  promptVersionNumber?: PromptVersionNumber3;
  /**
   * ID of the agent experiment that was running on the channel target when the session started.
   * Null when no experiment was running, which is the usual case.
   */
  experimentId?: ExperimentId;
  /** ID of the experiment variant that answered the session */
  experimentVariantId?: ExperimentVariantId;
  /** Name of the experiment variant that answered the session. */
  experimentVariant?: ExperimentVariant;
  /** Whether the experiment variant that answered the session is the control */
  experimentVariantIsControl?: ExperimentVariantIsControl;
  /** Duration of the session in seconds */
  duration?: Duration1;
  /**
   * ID of the label (listing the quality of the session and any issues that occurred) associated
   * with the session
   */
  sessionLabelId?: SessionLabelId;
  /**
   * Source of the session (e.g., for an inbound session, the user's phone number/username/email)
   */
  source?: Source2;
  /**
   * The name of the channel target associated with the agent at the time of the session (see
   * ChannelTargetResponse.target)
   */
  target?: Target1;
  /** Whether the session occurred on the legacy Syllable system */
  isLegacy?: IsLegacy1;
  /** Whether the session is a test session */
  isTest?: IsTest;
  /** Whether the session direction is outbound (true) or inbound (false). */
  isOutbound?: IsOutbound;
  /**
   * Whether the voice session was ended by the recipient (outbound) / caller (inbound). False if
   * the user was transferred or there was an error. Unset if the session was not a voice session.
   */
  userTerminated?: UserTerminated;
  /** Whether a voicemail was detected during the transfer leg of the session */
  transferVoicemailDetected?: TransferVoicemailDetected;
  /**
   * ISO 8601 datetime used to override the session's current time. Set only for test sessions that
   * supplied a datetime override; otherwise null.
   */
  overrideTimestamp?: OverrideTimestamp;
};

export const sessionSchema: Schema<Session> = s.object<Session>({
  timestamp: s.dateTime(),
  sessionId: s.optional(s.lazy(() => sessionId5Schema)),
  conversationId: s.optional(s.lazy(() => conversationId2Schema)),
  channelManagerService: s.optional(s.lazy(() => channelManagerServiceSchema)),
  channelManagerType: s.optional(s.lazy(() => channelManagerTypeSchema)),
  channelManagerSid: s.optional(s.lazy(() => channelManagerSid1Schema)),
  agentId: s.optional(s.lazy(() => agentId2Schema)),
  agentName: s.optional(s.lazy(() => agentName1Schema)),
  agentType: s.optional(s.lazy(() => agentType1Schema)),
  agentTimezone: s.optional(s.lazy(() => agentTimezoneSchema)),
  promptId: s.optional(s.lazy(() => promptId1Schema)),
  promptName: s.optional(s.lazy(() => promptName1Schema)),
  promptVersion: s.optional(s.lazy(() => promptVersion1Schema)),
  promptVersionNumber: s.optional(s.lazy(() => promptVersionNumber3Schema)),
  experimentId: s.optional(s.lazy(() => experimentIdSchema)),
  experimentVariantId: s.optional(s.lazy(() => experimentVariantIdSchema)),
  experimentVariant: s.optional(s.lazy(() => experimentVariantSchema)),
  experimentVariantIsControl: s.optional(s.lazy(() => experimentVariantIsControlSchema)),
  duration: s.optional(s.lazy(() => duration1Schema)),
  sessionLabelId: s.optional(s.lazy(() => sessionLabelIdSchema)),
  source: s.optional(s.lazy(() => source2Schema)),
  target: s.optional(s.lazy(() => target1Schema)),
  isLegacy: s.optional(s.lazy(() => isLegacy1Schema)),
  isTest: s.optional(s.lazy(() => isTestSchema)),
  isOutbound: s.optional(s.lazy(() => isOutboundSchema)),
  userTerminated: s.optional(s.lazy(() => userTerminatedSchema)),
  transferVoicemailDetected: s.optional(s.lazy(() => transferVoicemailDetectedSchema)),
  overrideTimestamp: s.optional(s.lazy(() => overrideTimestampSchema)),
  _keysMap: {
    sessionId: "session_id",
    conversationId: "conversation_id",
    channelManagerService: "channel_manager_service",
    channelManagerType: "channel_manager_type",
    channelManagerSid: "channel_manager_sid",
    agentId: "agent_id",
    agentName: "agent_name",
    agentType: "agent_type",
    agentTimezone: "agent_timezone",
    promptId: "prompt_id",
    promptName: "prompt_name",
    promptVersion: "prompt_version",
    promptVersionNumber: "prompt_version_number",
    experimentId: "experiment_id",
    experimentVariantId: "experiment_variant_id",
    experimentVariant: "experiment_variant",
    experimentVariantIsControl: "experiment_variant_is_control",
    sessionLabelId: "session_label_id",
    isLegacy: "is_legacy",
    isTest: "is_test",
    isOutbound: "is_outbound",
    userTerminated: "user_terminated",
    transferVoicemailDetected: "transfer_voicemail_detected",
    overrideTimestamp: "override_timestamp",
  },
});
