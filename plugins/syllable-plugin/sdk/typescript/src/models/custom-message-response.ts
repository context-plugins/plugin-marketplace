import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customMessageRuleSchema, type CustomMessageRule } from "./custom-message-rule.js";
import { customMessageType1Schema, type CustomMessageType1 } from "./custom-message-type1.js";
import { agentCount1Schema, type AgentCount1 } from "./unions/agent-count1.js";
import { label2Schema, type Label2 } from "./unions/label2.js";
import { preambleSchema, type Preamble } from "./unions/preamble.js";
import { subjectSchema, type Subject } from "./unions/subject.js";

/**
 * Response model for custom message operations. A custom message is a pre-configured message
 * delivered by an agent (e.g. as a greeting at the beginning of a conversation, or as an email
 * template with subject and body). Multiple agents can use the same custom message. Greeting-type
 * messages may have rules for time-based variants; email templates have a subject and body only.
 * For more information, see [Console docs](https://docs.syllable.ai/Resources/Messages).
 */
export type CustomMessageResponse = {
  /** The name of the custom message */
  name: string;
  /** Type of the custom message: greeting (voice) or email_template. */
  type?: CustomMessageType1;
  /**
   * An optional preamble that will be delivered before the main message, regardless of whether the
   * current time and date match a rule or the system uses the default message. Cannot contain the
   * "{{ language.mode }}" tag. In the case of a voice conversation, the user will not be able to
   * interrupt the preamble. Can be used for e.g. legal disclaimers that the user must always
   * see/hear.
   */
  preamble?: Preamble;
  /**
   * The default message that the agent will deliver if no rules are set or no rules match the
   * current timestamp. For email_template, this is the body.
   */
  text: string;
  /** Email subject. Required for email_template (in type_config); ignored otherwise. */
  subject?: Subject;
  /** The label of the custom message */
  label?: Label2;
  /**
   * If true, if the caller changes language using the language menu in the custom message, the
   * message will be repeated in the new language (not including the language menu).
   */
  repeatAfterLanguageChange: boolean;
  /** Rules for time-specific message variants */
  rules?: CustomMessageRule[];
  /** The ID of the custom message */
  id: number;
  /** Timestamp of the most recent update to the custom message */
  updatedAt: Date;
  /** The number of agents using the custom message */
  agentCount?: AgentCount1;
  /** The email address of the user who most recently updated the custom message */
  lastUpdatedBy: string;
};

export const customMessageResponseSchema: Schema<CustomMessageResponse> = s.object<CustomMessageResponse>({
  name: s.string(),
  type: s.optional(s.lazy(() => customMessageType1Schema)),
  preamble: s.optional(s.lazy(() => preambleSchema)),
  text: s.string(),
  subject: s.optional(s.lazy(() => subjectSchema)),
  label: s.optional(s.lazy(() => label2Schema)),
  repeatAfterLanguageChange: s.boolean(),
  rules: s.optional(s.array(s.lazy(() => customMessageRuleSchema))),
  id: s.int(),
  updatedAt: s.dateTime(),
  agentCount: s.optional(s.lazy(() => agentCount1Schema)),
  lastUpdatedBy: s.string(),
  _keysMap: {
    repeatAfterLanguageChange: "repeat_after_language_change",
    updatedAt: "updated_at",
    agentCount: "agent_count",
    lastUpdatedBy: "last_updated_by",
  },
});
