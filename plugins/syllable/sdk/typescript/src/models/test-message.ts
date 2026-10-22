import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { orgNameSchema, type OrgName } from "./unions/org-name.js";
import { overrideTimestamp1Schema, type OverrideTimestamp1 } from "./unions/override-timestamp1.js";
import { text4Schema, type Text4 } from "./unions/text4.js";

/** Message sent in a test chat with an agent. */
export type TestMessage = {
  /** Name of the service producing the message */
  serviceName: string;
  /** Name of the source of the message - identifies the user, like an email or username. */
  source: string;
  /** The text of the message */
  text?: Text4;
  /** Channel-manager-side ID of the session (see Session.channel_manager_sid) */
  testId: string;
  /** ID of the agent with which the chat is taking place */
  agentId: string;
  /**
   * Unused: Name of the organization associated with the agent
   *
   * @deprecated
   */
  orgName?: OrgName;
  /** Override for the timestamp of the message */
  overrideTimestamp?: OverrideTimestamp1;
  /** Whether this message is the start of a new session @default false */
  sessionStart?: boolean;
};

export const testMessageSchema: Schema<TestMessage> = s.object<TestMessage>({
  serviceName: s.string(),
  source: s.string(),
  text: s.optional(s.lazy(() => text4Schema)),
  testId: s.string(),
  agentId: s.string(),
  orgName: s.optional(s.lazy(() => orgNameSchema)),
  overrideTimestamp: s.optional(s.lazy(() => overrideTimestamp1Schema)),
  sessionStart: s.defaulted(s.boolean(), false),
  _keysMap: {
    serviceName: "service_name",
    testId: "test_id",
    agentId: "agent_id",
    orgName: "org_name",
    overrideTimestamp: "override_timestamp",
    sessionStart: "session_start",
  },
});
