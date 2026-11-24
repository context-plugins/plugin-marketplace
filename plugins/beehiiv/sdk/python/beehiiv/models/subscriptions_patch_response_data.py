from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SubscriptionsPatchResponseData(SdkBaseModel):
    subscription_update_id: Optional[str] = UNSET
    """The ID of the Subscription Update object responsible for handling the update job"""


class SubscriptionsPatchResponseDataDict(TypedDict):
    subscription_update_id: NotRequired[str]
