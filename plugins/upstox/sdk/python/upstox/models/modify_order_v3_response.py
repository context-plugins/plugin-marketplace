from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .modify_order_data import ModifyOrderData, ModifyOrderDataDict
from .order_metadata import OrderMetadata, OrderMetadataDict


class ModifyOrderV3Response(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[ModifyOrderData] = UNSET
    metadata: Optional[OrderMetadata] = UNSET


class ModifyOrderV3ResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[ModifyOrderDataDict]
    metadata: NotRequired[OrderMetadataDict]
