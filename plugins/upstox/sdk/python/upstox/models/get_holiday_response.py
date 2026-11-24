from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .holiday_data import HolidayData, HolidayDataDict


class GetHolidayResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[list[HolidayData]] = UNSET
    """Response data for holiday list"""


class GetHolidayResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[list[HolidayDataDict]]
