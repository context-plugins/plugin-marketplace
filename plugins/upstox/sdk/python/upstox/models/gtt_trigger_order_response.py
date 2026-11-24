from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .gtt_order_data2 import GttOrderData2, GttOrderData2Dict
from .order_metadata import OrderMetadata, OrderMetadataDict


class GttTriggerOrderResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[GttOrderData2] = UNSET
    """Response data for GTT order request"""

    metadata: Optional[OrderMetadata] = UNSET


class GttTriggerOrderResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[GttOrderData2Dict]
    metadata: NotRequired[OrderMetadataDict]
