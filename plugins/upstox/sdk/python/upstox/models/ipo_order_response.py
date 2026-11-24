from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .ipo_meta_data import IpoMetaData, IpoMetaDataDict
from .ipo_order_data import IpoOrderData, IpoOrderDataDict


class IpoOrderResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[list[IpoOrderData]] = UNSET
    meta_data: Optional[IpoMetaData] = UNSET


class IpoOrderResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[list[IpoOrderDataDict]]
    meta_data: NotRequired[IpoMetaDataDict]
