import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Information of a Slack channel for notifications. `customerId` and `workspace` are required
 * unless `shared` is true.
 */
export type SlackChannel = {
  customerId?: string;
  id: string;
  name?: string;
  shared?: boolean;
  type?: string;
  workspace?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const slackChannelSchema: Schema<SlackChannel> = s.object<SlackChannel>(
  {
    customerId: s.optional(s.string()),
    id: s.string(),
    name: s.optional(s.string()),
    shared: s.optional(s.boolean()),
    type: s.optional(s.string()),
    workspace: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
