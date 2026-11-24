from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CompanyQuarterlyGrowth(SdkBaseModel):
    year: Optional[int] = UNSET
    quarter: Optional[int] = UNSET
    values: Optional[list[int]] = UNSET


class CompanyQuarterlyGrowthDict(TypedDict):
    year: NotRequired[int]
    quarter: NotRequired[int]
    values: NotRequired[list[int]]
