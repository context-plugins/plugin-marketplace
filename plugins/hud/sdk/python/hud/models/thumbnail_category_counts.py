from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel


class ThumbnailCategoryCounts(SdkBaseModel):
    all: int = 0
    live: int = 0
    successful: int = 0
    failed: int = 0
    no_score: int = 0


class ThumbnailCategoryCountsDict(TypedDict):
    all: NotRequired[int]
    live: NotRequired[int]
    successful: NotRequired[int]
    failed: NotRequired[int]
    no_score: NotRequired[int]
