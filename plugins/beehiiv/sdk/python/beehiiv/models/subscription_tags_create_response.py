from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .subscription import Subscription, SubscriptionDict


class SubscriptionTagsCreateResponse(SdkBaseModel):
    data: Optional[Subscription] = UNSET
    """The subscription object"""


class SubscriptionTagsCreateResponseDict(TypedDict):
    data: NotRequired[SubscriptionDict]
