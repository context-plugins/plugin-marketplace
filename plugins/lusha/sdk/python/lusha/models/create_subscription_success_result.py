from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .subscription_without_secret import SubscriptionWithoutSecret, SubscriptionWithoutSecretDict


class CreateSubscriptionSuccessResult(SdkBaseModel):
    index: int
    success: Literal["True"] = "True"
    subscription: SubscriptionWithoutSecret


class CreateSubscriptionSuccessResultDict(TypedDict):
    index: int
    success: Literal["True"]
    subscription: SubscriptionWithoutSecretDict
