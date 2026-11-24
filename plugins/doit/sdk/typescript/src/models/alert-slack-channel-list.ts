import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  alertSlackChannelInternalSchema,
  alertSlackChannelSchema,
  type AlertSlackChannel,
} from "./alert-slack-channel.js";
import { workspaceStatusSchema, type WorkspaceStatus } from "./workspace-status.js";

export type AlertSlackChannelList = {
  items: AlertSlackChannel[];
  /** Total eligible channels after filtering and before pagination. */
  rowCount: number;
  /** Opaque continuation token. Omitted on the final page. */
  pageToken?: string;
  /**
   * Integration status. Reconnect for inactive; grant private-channel scopes for
   * missing_private_scope. None means no usable workspace was found; a shared channel may still be
   * available.
   */
  workspaceStatus: WorkspaceStatus;
  isWorkspaceConnected: boolean;
  hasSharedChannel: boolean;
  /**
   * Whether the channel list is complete. False when a transient Slack failure prevented a full
   * listing; callers that validate channel availability should not treat a partial list as
   * authoritative.
   */
  channelsComplete: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const alertSlackChannelListProperties: s.Shape<AlertSlackChannelList> = {
  items: s.array(s.lazy(() => alertSlackChannelInternalSchema)),
  rowCount: s.int(),
  pageToken: s.optional(s.string()),
  workspaceStatus: workspaceStatusSchema,
  isWorkspaceConnected: s.boolean(),
  hasSharedChannel: s.boolean(),
  channelsComplete: s.boolean(),
};

export const alertSlackChannelListInternalSchema: Schema<AlertSlackChannelList> =
  s.object<AlertSlackChannelList>(alertSlackChannelListProperties, { additionalProperties: s.json() });

export const alertSlackChannelListSchema: Schema<AlertSlackChannelList> = s.lazySchema(() =>
  s.object<AlertSlackChannelList>(
    {
      ...alertSlackChannelListProperties,
      items: s.array(s.lazy(() => alertSlackChannelSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
