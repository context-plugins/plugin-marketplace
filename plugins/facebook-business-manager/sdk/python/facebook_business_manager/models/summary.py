from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Summary(SdkBaseModel):
    total_count: Optional[int] = UNSET


class SummaryDict(TypedDict):
    total_count: NotRequired[int]
