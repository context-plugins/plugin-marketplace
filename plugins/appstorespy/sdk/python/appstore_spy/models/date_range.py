from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel


class DateRange(SdkBaseModel):
    lte: Optional[Date] = UNSET
    gte: Optional[Date] = UNSET


class DateRangeDict(TypedDict):
    lte: NotRequired[Date]
    gte: NotRequired[Date]
