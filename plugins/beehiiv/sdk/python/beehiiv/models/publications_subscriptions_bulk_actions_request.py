from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .subscriptions_patch_request_subscriptions_item import (
    SubscriptionsPatchRequestSubscriptionsItem,
    SubscriptionsPatchRequestSubscriptionsItemDict,
)


class PublicationsSubscriptionsBulkActionsRequest(SdkBaseModel):
    subscriptions: Optional[list[SubscriptionsPatchRequestSubscriptionsItem]] = UNSET
    """An array of objects representing the subscriptions to be updated (max 1000)."""


class PublicationsSubscriptionsBulkActionsRequestDict(TypedDict):
    subscriptions: NotRequired[list[SubscriptionsPatchRequestSubscriptionsItemDict]]
