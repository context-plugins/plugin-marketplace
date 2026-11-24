from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SegmentRecalculateResponse(SdkBaseModel):
    message: Optional[str] = UNSET


class SegmentRecalculateResponseDict(TypedDict):
    message: NotRequired[str]
