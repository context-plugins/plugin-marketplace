import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { notificationChannelSchema, type NotificationChannel } from "./notification-channel.js";

export type ListNotificationChannelsResponse = {
  /** An array that contains the requested notification channels. */
  channels?: NotificationChannel[];
  /**
   * The pagination token to use to retrieve the next page of results for this operation. If there
   * are no more pages, this value is null.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listNotificationChannelsResponseSchema: Schema<ListNotificationChannelsResponse> =
  s.object<ListNotificationChannelsResponse>(
    {
      channels: s.optional(s.array(s.lazy(() => notificationChannelSchema))),
      nextToken: s.optional(s.string()),
      _keysMap: {
        channels: "Channels",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
