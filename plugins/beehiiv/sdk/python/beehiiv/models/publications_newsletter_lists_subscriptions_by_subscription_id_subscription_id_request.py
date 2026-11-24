from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PublicationsNewsletterListsSubscriptionsBySubscriptionIdSubscriptionIdRequest(SdkBaseModel):
    unsubscribe: Optional[bool] = UNSET
    """Set to true to unsubscribe the subscription from this newsletter list."""


class PublicationsNewsletterListsSubscriptionsBySubscriptionIdSubscriptionIdRequestDict(TypedDict):
    unsubscribe: NotRequired[bool]
