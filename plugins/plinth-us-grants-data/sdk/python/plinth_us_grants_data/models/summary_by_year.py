from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SummaryByYear(SdkBaseModel):
    fiscal_year: Optional[int] = UNSET
    total_amount: Optional[int] = UNSET
    grant_count: Optional[int] = UNSET
    funder_count: Optional[int] = UNSET


class SummaryByYearDict(TypedDict):
    fiscal_year: NotRequired[int]
    total_amount: NotRequired[int]
    grant_count: NotRequired[int]
    funder_count: NotRequired[int]
