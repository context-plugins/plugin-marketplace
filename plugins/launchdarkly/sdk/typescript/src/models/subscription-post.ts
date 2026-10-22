import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { statementPostSchema, type StatementPost } from "./statement-post.js";

export type SubscriptionPost = {
  /** A human-friendly name for your audit log subscription. */
  name: string;
  statements?: StatementPost[];
  /** Whether or not you want your subscription to actively send events. */
  on?: boolean;
  /** An array of tags for this subscription. */
  tags?: string[];
  /**
   * The unique set of fields required to configure an audit log subscription integration of this
   * type. Refer to the <code>formVariables</code> field in the corresponding
   * <code>manifest.json</code> at
   * https://github.com/launchdarkly/integration-framework/tree/main/integrations for a full list of
   * fields for the integration you wish to configure.
   */
  config: Record<string, Record<string, unknown>>;
  /** Slack webhook receiver URL. Only necessary for legacy Slack webhook integrations. */
  url?: string;
  /** Datadog API key. Only necessary for legacy Datadog webhook integrations. */
  apiKey?: string;
};

export const subscriptionPostSchema: Schema<SubscriptionPost> = s.object<SubscriptionPost>({
  name: s.string(),
  statements: s.optional(s.array(s.lazy(() => statementPostSchema))),
  on: s.optional(s.boolean()),
  tags: s.optional(s.array(s.string())),
  config: s.record(s.string(), s.record(s.string(), s.unknown())),
  url: s.optional(s.string()),
  apiKey: s.optional(s.string()),
});
