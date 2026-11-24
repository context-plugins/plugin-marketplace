from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .media import Media, MediaDict
from .paging import Paging, PagingDict


class MediaList(SdkBaseModel):
    data: Optional[list[Media]] = UNSET
    paging: Optional[Paging] = UNSET


class MediaListDict(TypedDict):
    data: NotRequired[list[MediaDict]]
    paging: NotRequired[PagingDict]
