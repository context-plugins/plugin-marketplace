from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .summary import Summary, SummaryDict


class Comments(SdkBaseModel):
    summary: Optional[Summary] = UNSET


class CommentsDict(TypedDict):
    summary: NotRequired[SummaryDict]
