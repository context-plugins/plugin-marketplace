from __future__ import annotations

from typing import TypeAlias

from ..core import UnknownPayload, WebhookRequest, decode_json
from ..models.newsletter_list_subscription import NewsletterListSubscription
from ..models.podcast_episode_beehiiv_webhooks_api import PodcastEpisodeBeehiivWebhooksApi
from ..models.podcast_private_feed import PodcastPrivateFeed
from ..models.post_beehiiv_webhooks_api import PostBeehiivWebhooksApi
from ..models.subscription_beehiiv_webhooks_api import SubscriptionBeehiivWebhooksApi
from ..models.survey_response import SurveyResponse

BeehiivEventPayload: TypeAlias = (
    NewsletterListSubscription
    | SubscriptionBeehiivWebhooksApi
    | PodcastEpisodeBeehiivWebhooksApi
    | PodcastPrivateFeed
    | PostBeehiivWebhooksApi
    | SurveyResponse
)


def parse_webhook_event(request: WebhookRequest) -> BeehiivEventPayload | UnknownPayload:
    try:
        return decode_json[BeehiivEventPayload](request.body)
    except ValueError:
        return decode_json[UnknownPayload](request.body)
