import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PollResponseItem = {
  /** The unique identifier of the poll response. */
  id: string;
  /**
   * The prefixed ID of the subscription that responded. Null if the subscription has been
   * permanently deleted.
   */
  subscriptionId?: string;
  /** Whether the associated subscription has been deleted or permanently removed. */
  subscriptionDeleted: boolean;
  /** The UUID of the poll choice selected. */
  pollChoiceId: string;
  /** The text label of the poll choice selected. */
  pollChoiceLabel?: string;
  /** The time the response was created. Measured in seconds since the Unix epoch. */
  createdAt: number;
  /** Optional extended feedback provided by the subscriber. */
  extendedFeedback?: string;
  /**
   * The prefixed ID of the post where the response was collected. Only included when
   * `expand[]=post` is specified.
   */
  postId?: string;
  /**
   * The title of the post where the response was collected. Only included when `expand[]=post` is
   * specified.
   */
  postTitle?: string;
  /**
   * The scheduled publication date of the post where the response was collected. Measured in
   * seconds since the Unix epoch. Only included when `expand[]=post` is specified. Null if the post
   * is not yet scheduled.
   */
  postPublishDate?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pollResponseItemSchema: Schema<PollResponseItem> = s.object<PollResponseItem>(
  {
    id: s.string(),
    subscriptionId: s.optional(s.string()),
    subscriptionDeleted: s.boolean(),
    pollChoiceId: s.string(),
    pollChoiceLabel: s.optional(s.string()),
    createdAt: s.int(),
    extendedFeedback: s.optional(s.string()),
    postId: s.optional(s.string()),
    postTitle: s.optional(s.string()),
    postPublishDate: s.optional(s.int()),
    _keysMap: {
      subscriptionId: "subscription_id",
      subscriptionDeleted: "subscription_deleted",
      pollChoiceId: "poll_choice_id",
      pollChoiceLabel: "poll_choice_label",
      createdAt: "created_at",
      extendedFeedback: "extended_feedback",
      postId: "post_id",
      postTitle: "post_title",
      postPublishDate: "post_publish_date",
    },
  },
  { additionalProperties: s.json() },
);
