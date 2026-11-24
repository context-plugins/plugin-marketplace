import * as s from "../core/validation/index.js";
import { readWebhookBody } from "../core/webhooks/webhook-event-parser.js";
import type { WebhookRequest } from "../core/webhooks/webhook-request.js";
import {
  newsletterListSubscriptionSchema,
  type NewsletterListSubscription,
} from "../models/newsletter-list-subscription.js";
import {
  podcastEpisodeBeehiivWebhooksApiSchema,
  type PodcastEpisodeBeehiivWebhooksApi,
} from "../models/podcast-episode-beehiiv-webhooks-api.js";
import { podcastPrivateFeedSchema, type PodcastPrivateFeed } from "../models/podcast-private-feed.js";
import {
  postBeehiivWebhooksApiSchema,
  type PostBeehiivWebhooksApi,
} from "../models/post-beehiiv-webhooks-api.js";
import {
  subscriptionBeehiivWebhooksApiSchema,
  type SubscriptionBeehiivWebhooksApi,
} from "../models/subscription-beehiiv-webhooks-api.js";
import { surveyResponseSchema, type SurveyResponse } from "../models/survey-response.js";

type BeehiivEventPayload =
  | NewsletterListSubscription
  | SubscriptionBeehiivWebhooksApi
  | PodcastEpisodeBeehiivWebhooksApi
  | PodcastPrivateFeed
  | PostBeehiivWebhooksApi
  | SurveyResponse
  | Record<string, unknown>;

const beehiivEventPayloadSchema = s.bestFit<BeehiivEventPayload>([
  newsletterListSubscriptionSchema,
  subscriptionBeehiivWebhooksApiSchema,
  podcastEpisodeBeehiivWebhooksApiSchema,
  podcastPrivateFeedSchema,
  postBeehiivWebhooksApiSchema,
  surveyResponseSchema,
]);

export class BeehiivWebhookEvent<out P extends BeehiivEventPayload = BeehiivEventPayload> {
  readonly payload: P;

  constructor(payload: P) {
    this.payload = payload;
  }

  isNewsletterListSubscription(): this is BeehiivWebhookEvent<NewsletterListSubscription> {
    return newsletterListSubscriptionSchema.matches(this.payload);
  }

  isSubscriptionBeehiivWebhooksApi(): this is BeehiivWebhookEvent<SubscriptionBeehiivWebhooksApi> {
    return subscriptionBeehiivWebhooksApiSchema.matches(this.payload);
  }

  isPodcastEpisodeBeehiivWebhooksApi(): this is BeehiivWebhookEvent<PodcastEpisodeBeehiivWebhooksApi> {
    return podcastEpisodeBeehiivWebhooksApiSchema.matches(this.payload);
  }

  isPodcastPrivateFeed(): this is BeehiivWebhookEvent<PodcastPrivateFeed> {
    return podcastPrivateFeedSchema.matches(this.payload);
  }

  isPostBeehiivWebhooksApi(): this is BeehiivWebhookEvent<PostBeehiivWebhooksApi> {
    return postBeehiivWebhooksApiSchema.matches(this.payload);
  }

  isSurveyResponse(): this is BeehiivWebhookEvent<SurveyResponse> {
    return surveyResponseSchema.matches(this.payload);
  }
}

export function parseBeehiivWebhookEvent(request: WebhookRequest): BeehiivWebhookEvent {
  return new BeehiivWebhookEvent(beehiivEventPayloadSchema.decode(readWebhookBody(request)));
}
