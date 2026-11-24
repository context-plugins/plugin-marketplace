from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .subscription_request import SubscriptionRequest, SubscriptionRequestDict


class PublicationsBulkSubscriptionsRequest(SdkBaseModel):
    subscriptions: list[SubscriptionRequest]


class PublicationsBulkSubscriptionsRequestDict(TypedDict):
    subscriptions: list[SubscriptionRequestDict]
