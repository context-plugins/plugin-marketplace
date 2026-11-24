from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .item_razorpay_subscriptions_api import ItemRazorpaySubscriptionsApi, ItemRazorpaySubscriptionsApiDict


class Addon(SdkBaseModel):
    item: Optional[ItemRazorpaySubscriptionsApi] = UNSET


class AddonDict(TypedDict):
    item: NotRequired[ItemRazorpaySubscriptionsApiDict]
