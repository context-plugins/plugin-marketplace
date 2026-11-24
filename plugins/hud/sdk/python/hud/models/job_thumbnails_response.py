from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .job_thumbnail_item import JobThumbnailItem, JobThumbnailItemDict
from .thumbnail_category_counts import ThumbnailCategoryCounts, ThumbnailCategoryCountsDict


class JobThumbnailsResponse(SdkBaseModel):
    thumbnails: list[JobThumbnailItem]
    next_offset: Optional[int] = UNSET
    has_more: bool = False
    category_counts: Optional[ThumbnailCategoryCounts] = UNSET


class JobThumbnailsResponseDict(TypedDict):
    thumbnails: list[JobThumbnailItemDict]
    next_offset: NotRequired[int]
    has_more: NotRequired[bool]
    category_counts: NotRequired[ThumbnailCategoryCountsDict]
