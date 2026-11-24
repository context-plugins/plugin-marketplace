from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bulk_subscription_updates_get_response_data import (
    BulkSubscriptionUpdatesGetResponseData,
    BulkSubscriptionUpdatesGetResponseDataDict,
)


class BulkSubscriptionUpdatesGetResponse(SdkBaseModel):
    data: Optional[BulkSubscriptionUpdatesGetResponseData] = UNSET


class BulkSubscriptionUpdatesGetResponseDict(TypedDict):
    data: NotRequired[BulkSubscriptionUpdatesGetResponseDataDict]
