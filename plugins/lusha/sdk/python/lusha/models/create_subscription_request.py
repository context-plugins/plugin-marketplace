from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .defaults import Defaults, DefaultsDict
from .subscription1 import Subscription1, Subscription1Dict


class CreateSubscriptionRequest(SdkBaseModel):
    defaults: Defaults
    name: Optional[str] = UNSET
    """Default subscription name prefix"""

    subscriptions: list[Subscription1]
    """Array of subscriptions to create (max 25)"""


class CreateSubscriptionRequestDict(TypedDict):
    defaults: DefaultsDict
    name: NotRequired[str]
    subscriptions: list[Subscription1Dict]
