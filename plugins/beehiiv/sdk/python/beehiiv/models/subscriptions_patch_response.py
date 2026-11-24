from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .subscriptions_patch_response_data import SubscriptionsPatchResponseData, SubscriptionsPatchResponseDataDict


class SubscriptionsPatchResponse(SdkBaseModel):
    data: SubscriptionsPatchResponseData


class SubscriptionsPatchResponseDict(TypedDict):
    data: SubscriptionsPatchResponseDataDict
