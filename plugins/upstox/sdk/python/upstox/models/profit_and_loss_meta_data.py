from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ProfitAndLossMetaData(SdkBaseModel):
    page_number: Optional[int] = UNSET
    """pageNumber for pagination"""

    page_size: Optional[int] = UNSET
    """Page size"""


class ProfitAndLossMetaDataDict(TypedDict):
    page_number: NotRequired[int]
    page_size: NotRequired[int]
