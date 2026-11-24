from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .meta1 import Meta1, Meta1Dict


class V1JobsResultsResponse(SdkBaseModel):
    data: Optional[list[Any]] = UNSET
    """Result rows. Shape depends on job type: search jobs return SearchResultRow objects; batch_detail and
    chained_search_detail jobs return full Property (detail) objects."""

    meta: Optional[Meta1] = UNSET
    request_id: Optional[str] = UNSET


class V1JobsResultsResponseDict(TypedDict):
    data: NotRequired[list[Any]]
    meta: NotRequired[Meta1Dict]
    request_id: NotRequired[str]
