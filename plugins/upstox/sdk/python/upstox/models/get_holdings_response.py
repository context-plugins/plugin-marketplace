from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .holdings_data import HoldingsData, HoldingsDataDict


class GetHoldingsResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[list[HoldingsData]] = UNSET
    """Response data for holdings"""


class GetHoldingsResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[list[HoldingsDataDict]]
