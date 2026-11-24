from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .subscription import Subscription, SubscriptionDict


class DeleteSubscriptionSuccessResult(SdkBaseModel):
    index: int
    success: Literal["True"] = "True"
    subscription: Subscription


class DeleteSubscriptionSuccessResultDict(TypedDict):
    index: int
    success: Literal["True"]
    subscription: SubscriptionDict
