from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1Subscription(SdkBaseModel):
    """Pub/Sub subscription of an environment."""

    name: Optional[str] = UNSET
    """Full name of the Pub/Sub subcription. Use the following structure in your request: ``subscription
    "projects/foo/subscription/bar"``"""


class GoogleCloudApigeeV1SubscriptionDict(TypedDict):
    name: NotRequired[str]
