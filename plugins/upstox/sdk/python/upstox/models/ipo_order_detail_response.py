from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .ipo_order_data import IpoOrderData, IpoOrderDataDict


class IpoOrderDetailResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[IpoOrderData] = UNSET


class IpoOrderDetailResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[IpoOrderDataDict]
