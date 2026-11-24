from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .ipo_cancel_data import IpoCancelData, IpoCancelDataDict


class IpoCancelResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[IpoCancelData] = UNSET


class IpoCancelResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[IpoCancelDataDict]
