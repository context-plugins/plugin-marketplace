from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.subscription_tier_info_status import SubscriptionTierInfoStatusOrStr


class SubscriptionTierInfo(SdkBaseModel):
    id: str
    """The prefixed ID of the tier."""

    name: str
    status: SubscriptionTierInfoStatusOrStr
    """Returns whether or not the tier has any active prices."""


class SubscriptionTierInfoDict(TypedDict):
    id: str
    name: str
    status: SubscriptionTierInfoStatusOrStr
