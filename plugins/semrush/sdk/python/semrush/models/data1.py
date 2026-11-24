from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .subscription import Subscription, SubscriptionDict


class Data1(SdkBaseModel):
    """An object describes all app subscriptions"""

    subscriptions: Optional[list[Subscription]] = UNSET
    """app subscriptions"""


class Data1Dict(TypedDict):
    subscriptions: NotRequired[list[SubscriptionDict]]
