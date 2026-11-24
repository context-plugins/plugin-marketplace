from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .multi_order_v3_data import MultiOrderV3Data, MultiOrderV3DataDict
from .order_metadata import OrderMetadata, OrderMetadataDict


class PlaceOrderV3Response(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[MultiOrderV3Data] = UNSET
    metadata: Optional[OrderMetadata] = UNSET


class PlaceOrderV3ResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[MultiOrderV3DataDict]
    metadata: NotRequired[OrderMetadataDict]
