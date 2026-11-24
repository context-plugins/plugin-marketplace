from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1TrackResponse(SdkBaseModel):
    message: Optional[str] = UNSET


class V1TrackResponseDict(TypedDict):
    message: NotRequired[str]
