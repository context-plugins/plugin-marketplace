from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .gtt_order_details import GttOrderDetails, GttOrderDetailsDict
from .order_metadata import OrderMetadata, OrderMetadataDict


class GetGttOrderResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[list[GttOrderDetails]] = UNSET
    """Response data for order details"""

    metadata: Optional[OrderMetadata] = UNSET


class GetGttOrderResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[list[GttOrderDetailsDict]]
    metadata: NotRequired[OrderMetadataDict]
