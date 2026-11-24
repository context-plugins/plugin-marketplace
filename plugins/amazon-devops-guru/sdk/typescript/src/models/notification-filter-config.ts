import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { messageTypeSchema, type MessageType } from "./message-type.js";
import {
  severityAmazonDevOpsGuruChannelsApiSchema,
  type SeverityAmazonDevOpsGuruChannelsApi,
} from "./severity-amazon-dev-ops-guru-channels-api.js";

export type NotificationFilterConfig = {
  /**
   * The severity levels that you want to receive notifications for. For example, you can choose to
   * receive notifications only for insights with HIGH and MEDIUM severity levels. For more
   * information, see Understanding insight severities.
   */
  severities?: SeverityAmazonDevOpsGuruChannelsApi[];
  /**
   * The events that you want to receive notifications for. For example, you can choose to receive
   * notifications only when the severity level is upgraded or a new insight is created.
   */
  messageTypes?: MessageType[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const notificationFilterConfigSchema: Schema<NotificationFilterConfig> =
  s.object<NotificationFilterConfig>(
    {
      severities: s.optional(s.array(s.lazy(() => severityAmazonDevOpsGuruChannelsApiSchema))),
      messageTypes: s.optional(s.array(s.lazy(() => messageTypeSchema))),
      _keysMap: {
        severities: "Severities",
        messageTypes: "MessageTypes",
      },
    },
    { additionalProperties: s.json() },
  );
