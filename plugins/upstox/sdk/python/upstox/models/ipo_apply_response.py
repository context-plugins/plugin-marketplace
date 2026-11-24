from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .ipo_apply_data import IpoApplyData, IpoApplyDataDict


class IpoApplyResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[IpoApplyData] = UNSET


class IpoApplyResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[IpoApplyDataDict]
