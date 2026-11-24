import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const WebhookEventType = {
  PostSent: "post.sent",
  PostUpdated: "post.updated",
  SubscriptionConfirmed: "subscription.confirmed",
  SubscriptionCreated: "subscription.created",
  SubscriptionDowngraded: "subscription.downgraded",
  SubscriptionPaused: "subscription.paused",
  SubscriptionResumed: "subscription.resumed",
  SubscriptionTierPaused: "subscription.tier.paused",
  SubscriptionTierResumed: "subscription.tier.resumed",
  SubscriptionUpgraded: "subscription.upgraded",
  SubscriptionTierCreated: "subscription.tier.created",
  SubscriptionTierDeleted: "subscription.tier.deleted",
  SubscriptionDeleted: "subscription.deleted",
  NewsletterListSubscriptionSubscribed: "newsletter_list_subscription.subscribed",
  NewsletterListSubscriptionUnsubscribed: "newsletter_list_subscription.unsubscribed",
  NewsletterListSubscriptionPaused: "newsletter_list_subscription.paused",
  NewsletterListSubscriptionResumed: "newsletter_list_subscription.resumed",
  PostScheduled: "post.scheduled",
  SurveyResponseSubmitted: "survey.response_submitted",
  PodcastsEpisodePublished: "podcasts.episode.published",
  PodcastsEpisodeUpdated: "podcasts.episode.updated",
  PodcastsEpisodeArchived: "podcasts.episode.archived",
  PodcastsEpisodeDeleted: "podcasts.episode.deleted",
  PodcastsPrivateFeedActivated: "podcasts.private_feed.activated",
} as const;
export type WebhookEventType = (typeof WebhookEventType)[keyof typeof WebhookEventType] | (string & {});

export const webhookEventTypeSchema: EnumSchema<WebhookEventType> =
  s.enumOf<WebhookEventType>(WebhookEventType);
