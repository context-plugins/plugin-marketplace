from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .enums.coverage import CoverageOrStr


class DateModel(SdkBaseModel):
    coverage: Optional[CoverageOrStr] = UNSET
    date: Optional[Date] = UNSET


class DateModelDict(TypedDict):
    coverage: NotRequired[CoverageOrStr]
    date: NotRequired[Date]
