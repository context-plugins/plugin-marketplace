from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .subscription import Subscription, SubscriptionDict


class SubscriptionResponse(SdkBaseModel):
    """The response containing subscription data"""

    data: Subscription
    """The subscription object"""


class SubscriptionResponseDict(TypedDict):
    data: SubscriptionDict
