from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cancel_order_data import CancelOrderData, CancelOrderDataDict
from .enums.status import StatusOrStr
from .order_metadata import OrderMetadata, OrderMetadataDict


class CancelOrderV3Response(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[CancelOrderData] = UNSET
    metadata: Optional[OrderMetadata] = UNSET


class CancelOrderV3ResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[CancelOrderDataDict]
    metadata: NotRequired[OrderMetadataDict]
