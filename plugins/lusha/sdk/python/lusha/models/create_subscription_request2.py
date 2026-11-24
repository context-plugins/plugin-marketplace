from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .defaults1 import Defaults1, Defaults1Dict
from .subscription2 import Subscription2, Subscription2Dict


class CreateSubscriptionRequest2(SdkBaseModel):
    defaults: Defaults1
    name: Optional[str] = UNSET
    subscriptions: list[Subscription2]


class CreateSubscriptionRequest2Dict(TypedDict):
    defaults: Defaults1Dict
    name: NotRequired[str]
    subscriptions: list[Subscription2Dict]
