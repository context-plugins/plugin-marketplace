from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bulk_subscription_updates_list_response_data_item import (
    BulkSubscriptionUpdatesListResponseDataItem,
    BulkSubscriptionUpdatesListResponseDataItemDict,
)


class BulkSubscriptionUpdatesListResponse(SdkBaseModel):
    data: Optional[list[BulkSubscriptionUpdatesListResponseDataItem]] = UNSET
    """An array of Subscription Update objects"""


class BulkSubscriptionUpdatesListResponseDict(TypedDict):
    data: NotRequired[list[BulkSubscriptionUpdatesListResponseDataItemDict]]
