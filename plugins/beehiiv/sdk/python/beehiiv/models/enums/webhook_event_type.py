from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class WebhookEventType(str, Enum):
    POST_SENT = "post.sent"
    POST_UPDATED = "post.updated"
    SUBSCRIPTION_CONFIRMED = "subscription.confirmed"
    SUBSCRIPTION_CREATED = "subscription.created"
    SUBSCRIPTION_DOWNGRADED = "subscription.downgraded"
    SUBSCRIPTION_PAUSED = "subscription.paused"
    SUBSCRIPTION_RESUMED = "subscription.resumed"
    SUBSCRIPTION_TIER_PAUSED = "subscription.tier.paused"
    SUBSCRIPTION_TIER_RESUMED = "subscription.tier.resumed"
    SUBSCRIPTION_UPGRADED = "subscription.upgraded"
    SUBSCRIPTION_TIER_CREATED = "subscription.tier.created"
    SUBSCRIPTION_TIER_DELETED = "subscription.tier.deleted"
    SUBSCRIPTION_DELETED = "subscription.deleted"
    NEWSLETTER_LIST_SUBSCRIPTION_SUBSCRIBED = "newsletter_list_subscription.subscribed"
    NEWSLETTER_LIST_SUBSCRIPTION_UNSUBSCRIBED = "newsletter_list_subscription.unsubscribed"
    NEWSLETTER_LIST_SUBSCRIPTION_PAUSED = "newsletter_list_subscription.paused"
    NEWSLETTER_LIST_SUBSCRIPTION_RESUMED = "newsletter_list_subscription.resumed"
    POST_SCHEDULED = "post.scheduled"
    SURVEY_RESPONSE_SUBMITTED = "survey.response_submitted"
    PODCASTS_EPISODE_PUBLISHED = "podcasts.episode.published"
    PODCASTS_EPISODE_UPDATED = "podcasts.episode.updated"
    PODCASTS_EPISODE_ARCHIVED = "podcasts.episode.archived"
    PODCASTS_EPISODE_DELETED = "podcasts.episode.deleted"
    PODCASTS_PRIVATE_FEED_ACTIVATED = "podcasts.private_feed.activated"

    __str__ = str.__str__


WebhookEventTypeOrStr: TypeAlias = Annotated[WebhookEventType | str, open_enum_validator(WebhookEventType)]
