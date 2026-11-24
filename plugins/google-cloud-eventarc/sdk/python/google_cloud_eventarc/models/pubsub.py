from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Pubsub(SdkBaseModel):
    """Represents a Pub/Sub transport."""

    topic: Optional[str] = UNSET
    """Optional. The name of the Pub/Sub topic created and managed by Eventarc as a transport for the event delivery.
    Format: ``projects/{PROJECT_ID}/topics/{TOPIC_NAME}``. You can set an existing topic for triggers of the type
    ``google.cloud.pubsub.topic.v1.messagePublished``. The topic you provide here is not deleted by Eventarc at trigger
    deletion."""

    subscription: Optional[str] = UNSET
    """Output only. The name of the Pub/Sub subscription created and managed by Eventarc as a transport for the event
    delivery. Format: ``projects/{PROJECT_ID}/subscriptions/{SUBSCRIPTION_NAME}``."""


class PubsubDict(TypedDict):
    topic: NotRequired[str]
    subscription: NotRequired[str]
