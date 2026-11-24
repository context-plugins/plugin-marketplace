import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { Category, categorySchema } from "./category.js";

export type ApiV2MessageRequestsRequest = {
  /**
   * The ID of the subscriber to send the message to. Either `subscriber_id` or `phone` is
   * **required**.
   */
  subscriberId?: string;
  /**
   * The phone number of the subscriber to send the message to. The subscriber must exist. Either
   * `phone` or `subscriber_id` is **required**. The phone number of the subscriber you want to send
   * the message to.
   */
  phone?: string;
  /** ISO Alpha-2 country code, used to parse `phone` more accurately. @default "US" */
  country?: string;
  /** The message body that you want to send to the subscriber. */
  body: string;
  /** The category of message you are sending. @default Category.Promotional */
  category?: Category;
  /** ISO 8601 datetime to schedule delivery in the future. Default: `null` (deliver ASAP) */
  scheduledAt?: Date;
  /**
   * The URL of the media to send with the message. The media can be of type `gif`, `png`, and
   * `jpeg` and will be formatted correctly on the recipient's device. The media size limit is 1MB
   * for supported file types (JPEG, PNG, GIF) and 500KB for other types of accepted media. Please
   * note that if you include a media url with your message, then it gets sent as an MMS message,
   * which has different costs and character limits than SMS messages.
   */
  mediaUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2MessageRequestsRequestSchema: Schema<ApiV2MessageRequestsRequest> =
  s.object<ApiV2MessageRequestsRequest>(
    {
      subscriberId: s.optional(s.string()),
      phone: s.optional(s.string()),
      country: s.defaulted(s.string(), "US"),
      body: s.string(),
      category: s.defaulted(categorySchema, Category.Promotional),
      scheduledAt: s.optional(s.dateTime()),
      mediaUrl: s.optional(s.string()),
      _keysMap: {
        subscriberId: "subscriber_id",
        scheduledAt: "scheduled_at",
        mediaUrl: "media_url",
      },
    },
    { additionalProperties: s.json() },
  );
