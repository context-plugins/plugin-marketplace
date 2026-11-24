from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SearchSegment(SdkBaseModel):
    text: Optional[str] = UNSET
    match: Optional[bool] = UNSET


class SearchSegmentDict(TypedDict):
    text: NotRequired[str]
    match: NotRequired[bool]
