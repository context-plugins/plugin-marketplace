from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ProfitAndLossMetaData2(SdkBaseModel):
    """Meta data for trade wise data details"""

    page_number: Optional[int] = UNSET
    """pageNumber for pagination"""

    page_size: Optional[int] = UNSET
    """Page size"""


class ProfitAndLossMetaData2Dict(TypedDict):
    page_number: NotRequired[int]
    page_size: NotRequired[int]
