from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Stories(SdkBaseModel):
    count: Optional[int] = UNSET
    limit: Optional[int] = UNSET


class StoriesDict(TypedDict):
    count: NotRequired[int]
    limit: NotRequired[int]
