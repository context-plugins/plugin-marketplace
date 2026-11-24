from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SegmentDeleteResponse(SdkBaseModel):
    message: Optional[str] = UNSET


class SegmentDeleteResponseDict(TypedDict):
    message: NotRequired[str]
