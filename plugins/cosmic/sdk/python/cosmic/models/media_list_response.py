from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .media import Media, MediaDict


class MediaListResponse(SdkBaseModel):
    media: list[Media]
    total: Optional[int] = UNSET
    limit: Optional[int] = UNSET


class MediaListResponseDict(TypedDict):
    media: list[MediaDict]
    total: NotRequired[int]
    limit: NotRequired[int]
